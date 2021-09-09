<template>
  <router-view v-slot="{ Component }">
    <suspense>
      <template #default>
        <component :is="Component" loaded />
      </template>
      <template #fallback>
        <component :is="Component" :loaded="false" />
      </template>
    </suspense>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  mounted() {},
});
</script>
