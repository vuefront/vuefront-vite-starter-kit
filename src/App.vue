<template>
  <router-view />
</template>
<script>
import Vue from 'vue'
export default {
  methods: {
    promisify (fn, context) {
      let promise
      if (fn.length === 2) {
        console.warn('Callback-based asyncData, fetch or middleware calls are deprecated. ' +
          'Please switch to promises or async/await syntax')

        // fn(context, callback)
        promise = new Promise((resolve) => {
          fn(context, function (err, data) {
            if (err) {
              context.error(err)
            }
            data = data || {}
            resolve(data)
          })
        })
      } else {
        promise = fn(context)
      }

      if (promise && promise instanceof Promise && typeof promise.then === 'function') {
        return promise
      }
      return Promise.resolve(promise)
    },
    getMatchedComponents (route, matches = false, prop = 'components') {
      return Array.prototype.concat.apply([], route.matched.map((m, index) => {
        return Object.keys(m[prop]).map((key) => {
          matches && matches.push(index)
          return m[prop][key]
        })
      }))
    },
    getMatchedComponentsInstances (route, matches = false) {
      return this.getMatchedComponents(route, matches, 'instances')
    },
    async refresh () {
      const pages = this.getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      const promises = pages.map((page) => {
        const p = []

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(this.promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            this.promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })

      try {
        await Promise.all(promises)
      } catch (error) {
        this.error(error)
      }
    }
  }
}
</script>