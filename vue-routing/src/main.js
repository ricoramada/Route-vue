import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import Home from './components/home.vue'
import About from './components/about.vue'
import Contact from './components/contact.vue'
import NotFound from './components/notfound.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path : '/', component : Home},
    {path : '/about', component : About},
    {path : '/contact', component : Contact},
    {path : '*', component : NotFound},
  ],
  mode: 'history'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
