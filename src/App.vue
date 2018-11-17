<template>
  <div id="app">
    <div id="root" @mousemove="onMouseMove">
      <div :style="styleOne"></div>
      <div :style="styleTwo"></div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#root {
  height: 100vh;
  width: 100vw;
}
#root div {
  position: absolute;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 50px grey;
}
</style>
