import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el:"#root",
  data: {styleOne: {}, styleTwo: {}},
  methods: {
    onMouseMove(e) {
      this.styleOne = transform(-e.clientX / e.clientY)
      this.styleTwo = transform(e.clientX /e.clientY)
    }
  }
}).$mount('#app')

function transform(offset) {
  const cos = Matn.cos(offset);
  const sin = Math.sin(offset);
  return {
    transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
  }
}
