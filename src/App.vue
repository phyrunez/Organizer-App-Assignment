<template>
  <div id="app">
    <navbar 
      :pages="pages"
      :active-page="activePage"
      :nav-link-click="(index) => { activePage = index }"
    />
    <!-- <task :tasks="tasks" /> -->
    <router-view></router-view>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Tasks from './components/Tasks.vue'
// import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'task': Tasks,
    // 'home': Home
  },
  data() {
    return {
      activePage: 0,
      page: [
        { text: 'Home', url: 'index.html' },
        { text: 'Add Tasks', url: 'tasks.html' },
      ],
    }
  }
}
</script>

<style>

</style>
