<template>
  <div id="app">

    <nav class="topnav">
      <router-link tag="a" to="/search">&nbsp;Search</router-link>
      <router-link id="logo_app" to="/"><img src="./assets/popcorn_blanc.png" width="50px" /></router-link>
    </nav>
    
    <router-view />

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url("./assets/main.css");
</style>
