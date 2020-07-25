<template>
  <div id="Header">
      Header 
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
    #Header{
        position: fixed;
        top: 0;
        left: $navWidth;
        height: 75px;
        width: 100vw;
        -webkit-box-shadow: 0 3px 16px  rgba(0,0,0,.1);
        background-color: #fff;
    }
</style>