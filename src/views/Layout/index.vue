<template>
  <div id="layout">
      <Nav />
      <div class="rightContent">
          <Header />
          <Main />
      </div>
  
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
      display: flex;
        background-color: #f5f5f5;
    }
    .rightContent{
      width: calc(100vw - 250px);
      height: 100vh;
      
    }
</style>