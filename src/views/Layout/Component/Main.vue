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
  methods: {},

}
</script>

<style scoped lang='scss'>
@import '../../../styles/config.scss';
    #Main{
        height:calc(100vh - 75px);
        padding:30px 30px 0 30px; 
        box-sizing:border-box ;
        background-color: #fff;
        border:30px solid #eee;
    }
</style>