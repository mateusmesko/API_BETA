<template>
   <div id="app">
    
    <Nav />
    <Home/>
    <login/>
   </div>
</template>

<script>
  import Nav from './components/nav.vue'
  import Home from './components/home.vue'
  import Login from './components/Login.vue'
  export default {
    name:'App',
    components:{
      Nav,
      Home,
      Login
    }
  }
</script>

<style>

</style>
