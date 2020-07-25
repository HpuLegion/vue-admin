<template>
  <div id="Nav">
      <!-- 大图标 -->
      <div class="bigLogo">
          <img src="../../../assets/logo.png" />
      </div>
        <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        text-color='#fff'
        background-color="transparent"
        active-text-color="#fff"
        unique-opened
        router
        @open="handleOpen"
        @close="handleClose">
        <template v-for="(item ,index) in routes">
            <!--  :index="index+''" 想要得到的是string，所以需要将数字转换   -->
            <el-submenu v-if="!item.hidden" :index="index+''" :key='index'>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.meta.name}}</span>
                </template>
                <!-- 开启了router, 这里将 index 作为跳转路径 :index="subItem.path" -->
            <el-menu-item v-for= "(subItem,index) in item.children" :key="index" :index="subItem.path">{{subItem.meta.name}}</el-menu-item>

        </el-submenu>
        </template>


        </el-menu>
  </div>
</template>

<script>


export default {
  name: '',
  data () {
    return {
        routes:[]
    }
  },
  created(){
      //拿到全部路由信息
      //console.log(this.$router.options.routes)
      this.routes=this.$router.options.routes
  },
  methods: {
    //   打开控制台
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      
    },
    // 关闭控制台
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../../../styles/config.scss';
    #Nav{
        width: $navWidth;
        height: 100vh;
        background-color: #344a5f;
    }
    .bigLogo{
        position: relative;
        width: 100%;
        height: 113px;
        img{
            position: absolute;
            width: 70px;
            height: 70px;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }

    //有效，但这是直接修改elementUI组件样式，不能在局部中修改，建议单独建文件引入全局修改
    // .el-menu-item .is-active {
    //     background-color: #f56c6c !important;
    // }

    //样式穿透 -- 此法暂未生效，待验证
    //   .el-menu-item /deep/.is-active {
    //      background-color: #f56c6c ;
    //  }
</style>