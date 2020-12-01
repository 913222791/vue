<template>
  <div id="app">
    <div id="nav">
      <router-link to="/pageA/5188">pageA</router-link>
      <router-link to="/pageB">pageB</router-link>
      <router-link to="/pageC">pageC</router-link>
      <Button>123</Button>
    </div>
    <router-view/>
  </div>
</template>
<script>

import Button from './router/views/button'
export default {
  name: 'App',
  components: {
    Button
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
