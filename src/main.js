import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el:"#app",
  data: { styleOne: {}, styleTwo: {} },
  methods: {
    onMouseMove(event) {
      this.styleOne = transform(-event.clientX / event.clientY);
      this.styleTwo = transform(event.clientX / event.clientY);
    }
  }
}).$mount('#app')

function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return {
    transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
  };
}