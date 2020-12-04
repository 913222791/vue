<template>
  <div id="app">
    <div id="nav">
      <router-link to="/pageA/123/vue">pageA</router-link>
      <router-link to="/pageB">pageB</router-link>
      <router-link to="/pageC">pageC</router-link>
      <Button>123</Button>
      <Button type="primary" :loading="true">加载中</Button>
    </div>
    <router-view/>
  </div>
</template>
<script>

import Button from '@/components/button'
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
