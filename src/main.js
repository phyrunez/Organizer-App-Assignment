import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import Routes from './routes'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


const data = {
  name: "",
  description: "",
  status: "",  // Pending, Inprogress, completed
  id: "",
  tasks: []
}

const allTasks = [data]
allTasks.length
allTasks.find(task => task.status === "pending")