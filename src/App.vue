<template>
  <div id="app">
    <div class="columns is-full" v-heatmap="show">
      <img  alt="Vue logo" src="./assets/logo.png">
    </div>
    <Heatmap/>
  </div>
</template>

<script>
import Heatmap from './components/Heatmap.vue'
import { pauser } from './main.js';
export default {
  name: 'app',
  components: {
    Heatmap
  },
  data() {
    return {
      paused: false,
      show: true,
    }
  },  
  async mounted() {
    window.addEventListener('load', () => {
      pauser.next(false);
    });
  },
}
</script>

<style>
</style>
