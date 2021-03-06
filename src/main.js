import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { valueOf } from 'core-js/fn/number/epsilon'

Vue.config.productionTip = false

new Vue ({
    render: h =>h(App),
    }).$mount('#app')


Vue.prototype.$axios = axios