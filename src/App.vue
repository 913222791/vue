<template>
  <div id="app">
    <div id="nav">
      <router-link to="/pageA/123/vue">pageA</router-link>
      <router-link to="/pageB">pageB</router-link>
      <router-link to="/pageC">pageC</router-link>
      <Button type="danger" disabled>123</Button>
      <Button type="primary" :loading="true">加载中</Button>
      <Link href="https://element.eleme.io" target="_blank">默认链接</Link>
      <Link type="primary" >主要链接</Link>
      <Link href="https://element.eleme.io" type="success" disabled>成功链接</Link>
      <Link href="https://element.eleme.io" type="warning" :underline="false">警告链接</Link>
      <Link type="danger" disabled>危险链接</Link>
      <Link type="info" disabled>信息链接</Link>
    </div>
    <router-view/>
  </div>
</template>
<script>

import Link from '@/components/link'
import Button from '@/components/button'
export default {
  name: 'App',
  components: {
    Button,
    Link,
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
