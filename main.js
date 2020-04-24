import Vue from 'vue'
import App from './App'

import index from './pages/basics/home.vue'
Vue.component('index',index)

import list from './pages/component/home.vue'
Vue.component('list',list)

import mine from './pages/plugin/home.vue'
Vue.component('mine',mine)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



