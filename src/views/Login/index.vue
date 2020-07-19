<template>
  <div id='login'>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!-- <el-row style="display:flex;justify-content:center;">
            <el-button type="primary" plain>登录</el-button>
            <el-button type="primary" plain>注册</el-button>
          </el-row> -->
            <ul style="display:flex;justify-content:center;">
                <li class="currentHeaderBtn01 cursor_hand" :class='currentIndex===index? "currentHeaderBtn":""' v-for='(item,index) in cancelBtn' :key='item.id' @click='handle(index,item.currentShowBool)'>{{item.text}}</li>
            </ul>
        </div>
        <!-- 登录界面 -->
        <!-- <div v-if='showPage'>
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
                  v-model="pass"
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
                  <el-button type="primary">发送验证码</el-button>
                </el-row>
            </div>
            <div class="loginSubmit">
                <span>登录</span>
            </div>
        </div> -->

        <!-- 登录界面改进版 -->

        <!-- 对于切换界面,v-show也可以，给cancelBtn的item添加type:'loginIn' | 'regiter' ，点击事件将type赋值给定义的model，而根元素上的v-show="model==='loginIn' | 'regiter' "来判断显示隐藏-->
        <div v-if='showPage' class="page">
            <el-form label-position="top" :model="formLabelAlign" :rules="rules" ref="ruleFormRef" >

              <el-form-item  prop='emailValue' >
                <label >邮箱：</label>
                <el-input v-model="formLabelAlign.emailValue" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item  prop='pass' >
                <label >密码：</label>
                <el-input type="password" v-model="formLabelAlign.pass" show-password autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item  prop='codeValue'>
                  <label >验证码：</label>
                  <el-row :gutter="30">
                    <el-col :span="14">
                        <el-input
                            v-model="formLabelAlign.codeValue"
                            clearable>
                        </el-input>
                    </el-col>
                    <el-col :span="10">
                        <el-button type="primary" class="block">发送验证码</el-button>
                    </el-col>
                  </el-row>
              </el-form-item>

              <!-- 登录 -->
              <el-button type="primary" class="block loginBtn">登录</el-button>           
            </el-form>
        </div>
        <!-- 注册界面 -->
        <!-- <div v-else>
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
                  v-model="pass"
                  clearable>
                </el-input>
            </div>
            <div class="box">
                <div class="boxItem">确认密码：</div>
                <el-input
                  placeholder="请输入密码"
                  v-model="pass"
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
                  <el-button type="primary">发送验证码</el-button>
                </el-row>
            </div>
            <div class="loginSubmit">
                <span>登录</span>
            </div>
        </div> -->
        <!-- 注册界面改进 -->
        <div v-else class="page">
            <el-form label-position="top" :model="formLabelAlign" :rules="rules" ref="ruleFormRef" >

              <el-form-item  prop='emailValue' >
                <label >邮箱：</label>
                <el-input v-model="formLabelAlign.emailValue" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item  prop='pass' >
                <label >密码：</label>
                <el-input type="password" v-model="formLabelAlign.pass" show-password autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item  prop='checkPass' >
                <label >确认密码：</label>
                <el-input  type="password" v-model="formLabelAlign.checkPass" show-password autocomplete="off"></el-input>
              </el-form-item>

              <!-- 验证码 -->
              <!-- <el-form-item label="验证码：" prop='codeValue'>
                <el-row style="display:flex;">
                  <el-input
                    v-model="formLabelAlign.codeValue"
                    clearable
                    style="margin-right:20px;">
                  </el-input>
                  <el-button type="primary">发送验证码</el-button>
                </el-row>
              </el-form-item> -->
              <!-- 验证码layout布局 -->

              <el-form-item  prop='codeValue'>
                  <label >验证码：</label>
                  <el-row :gutter="30">
                    <el-col :span="14">
                        <el-input
                            v-model="formLabelAlign.codeValue"
                            clearable>
                        </el-input>
                    </el-col>
                    <el-col :span="10">
                        <el-button type="primary" class="block">发送验证码</el-button>
                    </el-col>
                  </el-row>
              </el-form-item>

              <!-- 登录 -->
              <el-button type="primary" class="block loginBtn">登录</el-button>           
            </el-form>
        </div>
      </el-card>
  </div>
</template>

<script>
import {stripscript,validateEmailFun } from '@/utils/validate'
export default {
  name: '',
  data () {
    // 邮箱
      var validateEmail = (rule, value, callback) => {
        // var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (value=='') {
           callback(new Error('请输入邮箱'));
        }else if(validateEmailFun(value)){
           callback(new Error('邮箱格式错误'));
        }else{
          callback()
        }
        
      };
      // 密码
      var validatePass = (rule, value, callback) => {

        // 过滤字符重新赋值
        this.formLabelAlign.pass=stripscript(value)
        value=this.formLabelAlign.pass

        let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/

        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (!reg.test(value)) {
            callback(new Error('请输入正确格式密码'));
          }
          callback();
        }
      };
      // 验证密码
      var validatePass2 = (rule, value, callback) => {

                // 过滤字符重新赋值
        this.formLabelAlign.checkPass=stripscript(value)
        value=this.formLabelAlign.pass
        
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formLabelAlign.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      // 验证码
      var validateCode = (rule, value, callback) => {

                // 过滤字符重新赋值
        this.formLabelAlign.codeValue=stripscript(value)
        value=this.formLabelAlign.pass
        
        let reg = /^[a-z0-9]{6}$/

        if (value === '') {
          callback(new Error('请验证码'));
        } else if (!reg.test(value)) {
          callback(new Error('验证码格式不正确'));
        } else {
          callback();
        }
      };

    return {
      formLabelAlign:{
        emailValue:'',
        pass:'',
        checkPass:'',
        codeValue:'',
      },
       rules: {
          // emailValue: [
          //   { required: true, message: '请输入邮箱', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: ['blur', 'change'] }
          // ],
          // pass: [
          //   { required: true, message: '请输入密码', trigger: 'blur' },
          //   { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          // ],
          // codeValue: [
          //   { required: true, message: '请输入验证码', trigger: 'blur' },
          //   { min: 4, max: 6, message: '请输入正确的验证码', trigger: 'blur' }
          // ],
          emailValue: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          codeValue: [
            { validator: validateCode, trigger: 'blur' }
          ],
       },

      cancelBtn:[
        {text:'登 录',currentShowBool:true},
        {text:'注 册',currentShowBool:false}
      ],
      currentIndex:0,
      showPage:true,

    }
  },
  methods: {
    // handle(index){
    //   this.currentIndex=index,
    //   this.showPage=!this.showPage //这里出现bug，即点击同一个按钮也会切换界面
    // },

    // 解决bug
    handle(index,currentShowBool){
      this.currentIndex=index,
      this.showPage=currentShowBool 
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
    width: 420px;
    height: 490px;
  }
  .block{
      display:block;
      width: 100%;
  }
  .loginBtn{
    margin-top: 13px;
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
  .cursor_hand {
    cursor:pointer ;
  }
  .el-form-item{
    margin-bottom: 3px;
  }
  .page{
    margin-top: -20px;
  }
</style>