<template>
  <suspense>
    <router-view />
  </suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  mounted() {},
});
</script>
