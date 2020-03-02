<template>
  <div class="wrapper">
   <h2>Demo</h2>
    <div class="demo-wrapper">
      <div class="heatmap">
      </div>
    </div>
  </div>
</template>

<script>
const h337 = require('heatmap.js')
export default {
  name: 'Heatmap',
  props: {
  },
  data(){

  },
  methods:{
    drawHeatmap(){
var heatmapInstance = h337.create({
  // only container is required, the rest will be defaults
  container: document.querySelector('.heatmap')
});

// now generate some random data
var points = [];
var max = 0;
var width = 840;
var height = 400;
var len = 200;

while (len--) {
  var val = Math.floor(Math.random()*100);
  max = Math.max(max, val);
  var point = {
    x: Math.floor(Math.random()*width),
    y: Math.floor(Math.random()*height),
    value: val
  };
  points.push(point);
}
// heatmap data format
var data = { 
  max: max, 
  data: points 
};
// if you have a set of datapoints always use setData instead of addData
// for data initialization
// heatmapInstance.setData(data);
heatmapInstance.setData(data);
    }
  },
  mounted(){
    this.drawHeatmap()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-wrapper { 
    height:400px;
    background:rgba(0,0,0,.03);
    border:3px solid black;
}
.heatmap {
    width:100%;
    height:100%;
}
</style>
