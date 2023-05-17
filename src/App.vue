<template>
    <div id="app">
      <navbar />
      <router-view></router-view>
    </div> 
</template>

<script>
import Navbar from './components/Navbar.vue'
import Tasks from './components/Tasks/Tasks.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'task': Tasks,
    'home': Home
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
