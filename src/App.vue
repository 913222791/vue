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
      <Container style="height: 500px; border: 1px solid red">
      <Header>Header</Header>
      <Footer>Footer</Footer>
      <Main>Main</Main>
      <Header>Header</Header>
      <Main>Main</Main>
      <Footer>Footer</Footer>
      </Container>
      <Radio disabled v-model="radio" label="禁用">备选项</Radio>
      <Radio v-model="radio" label="１">备选项</Radio>
      <RadioButton label="上海" ></RadioButton>
      <RadioButton label="北京"></RadioButton>
      <RadioButton label="广州"></RadioButton>
      <RadioButton label="深圳" border></RadioButton>
    </div>
    <router-view/>
  </div>
</template>
<script>

import Container from '@/components/container'
import Link from '@/components/link'
import Button from '@/components/button'
import Header from '@/components/header'
import Main from '@/components/main'
import Footer from '@/components/footer'
import Radio from '@/components/radio.vue'
import RadioButton from '@/components/radio-button.vue'
import RadioGroup from '@/components/radio-group'


export default {
  name: 'App',
  components: {
    Button,
    Link,
    Container,
    Header,
    Main,
    Footer,
    Radio,
    RadioButton,
    RadioGroup,
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
