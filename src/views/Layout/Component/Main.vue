<template>
  <div id="Main">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
@import '../../../styles/config.scss';
    #Main{
        position: fixed;
        top: 75px;
        left: $navWidth;
        height: 100vh;
        width: 100vw;
        margin-top: 30px;
        margin-left: 30px;
        background-color: #fff;
    }
</style>