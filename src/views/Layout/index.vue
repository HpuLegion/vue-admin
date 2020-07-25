<template>
  <div id="layout">
      <Header />
      <Nav />
      <Main />
  </div>
</template>

<script>
import Header from './Component/Header'
import Main from './Component/Main'
import Nav from './Component/Nav'
export default {
  name: 'Layout',
  components:{
     Header,
      Main,
      Nav
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
    #layout{
        background-color: #f5f5f5;
    }
</style>