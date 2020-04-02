<template>
  <div id="app">

    <nav class="topnav">
      <router-link tag="a" to="/">&nbsp;Search</router-link>
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
