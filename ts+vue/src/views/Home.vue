<template>
  <div>
    <!-- <Comp :title-info="{ value: 'vue3+ts', color: 'green' }"></Comp> -->
    <CompSetup :title-info="{ value: 'vue3+ts', color: 'yellow' }"></CompSetup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Comp from '../components/Comp.vue'
import CompSetup from '../components/CompSetup.vue'

export default defineComponent({
  components: {
    CompSetup,
  },
})

</script>

<style>
</style>