import Vue from 'vue'
import App from './App.vue'

import vuejsTypist from './components/vuejs-typist'

Vue.component('vuejsTypist', vuejsTypist);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
