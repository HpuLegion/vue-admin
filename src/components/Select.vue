<template>
  <div>
      <el-select v-model="value" placeholder="请选择">
          <el-option       
            v-for="item in initNewOption"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
      </el-select>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    configDataClass:{
      type:Array,
      default:()=>{}
    }
  },
  data () {
    return {
      value:'',
      options:[
          {value:"name",label:"姓名"},
          {value:"phone",label:"手机号"},
          {value:"email",label:"邮箱"},
          // 有新的需要匹配的可以继续添加
      ],
      initNewOption:[] //直接对原始的options修改是不合理的，所以将过滤过的options赋值给定义的新options
    }
  },
  methods: {
    // 通过过滤options中的内容来匹配configDataClass
    initOptions(){
      let optionArr=[]
      this.configDataClass.forEach(item=>{
        let arr=this.options.filter(elem=>elem.value===item)[0]
        console.log(arr)
        optionArr.push(arr)
        
      })
      this.initNewOption=optionArr   
      console.log(optionArr)
    }
    
  },
  mounted(){
    this.initOptions()
  }
}
</script>

<style scoped lang='scss'>

</style>