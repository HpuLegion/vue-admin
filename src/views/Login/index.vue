<template>
  <div id='login'>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!-- <el-row style="display:flex;justify-content:center;">
            <el-button type="primary" plain>登录</el-button>
            <el-button type="primary" plain>注册</el-button>
          </el-row> -->
            <ul style="display:flex;justify-content:center;">
                <li class="currentHeaderBtn01" :class='currentIndex===index? "currentHeaderBtn":""' v-for='(item,index) in cancelBtn' :key='item.id' @click='handle(index)'>{{item.text}}</li>
            </ul>
        </div>
        <!-- 登录界面 -->
        <div v-if='showPage'>
            <div class="box">
                <div class="boxItem">邮箱：</div>
                <el-input
                  placeholder="请输入邮箱"
                  v-model="emailValue"
                  clearable>
                </el-input>
            </div>
            <div class="box">
                <div class="boxItem">密码：</div>
                <el-input
                  placeholder="请输入密码"
                  v-model="passWordValue"
                  clearable>
                </el-input>
            </div>
            <div class="box">
                <div class="boxItem">验证码：</div>
                <el-row style="display:flex;">
                  <el-input
                    placeholder="请输入验证码"
                    v-model="codeValue"
                    clearable
                    style="margin-right:20px;">
                  </el-input>
                  <el-button type="primary">主要按钮</el-button>
                </el-row>
            </div>
            <div class="loginSubmit">
                <span>登录</span>
            </div>
        </div>
        <!-- 注册界面 -->
        <div v-else>
            注册界面
        </div>
      </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      emailValue:'',
      passWordValue:'',
      codeValue:'',
      cancelBtn:[
        {text:'登 录'},
        {text:'注 册'}
      ],
      currentIndex:0,
      showPage:true
    }
  },
  methods: {
    handle(index){
      this.currentIndex=index,
      this.showPage=!this.showPage
    }
  }
}
</script>

<style scoped lang='scss'>
  #login{
    height: 100vh;
    background-color: #2e4e6e;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
  }
  .loginSubmit{
    background-color: #00ace6;
    height: 42px;
    border-radius: 3px;
    text-align: center;
    line-height: 42px;
    font-size: 19px;
    color: #fff;
  }
  .box{
    margin-bottom: 10px;
  }
  .boxItem{
    margin-bottom: 5px;
  }
  .currentHeaderBtn{
    background-color: #00ace6!important;
  }
  .currentHeaderBtn01{
    width: 74px;
    height: 40px;
    margin: 0 7px;
    text-align: center;
    line-height: 39px;
    border-radius: 2px;
    color: #fff;
    background-color: #9494b8;
  }
</style>