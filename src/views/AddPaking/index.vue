<template>
  <div id='paking_add'>
    <el-form ref="form"
             :model="form"
             label-width="100px">
      <el-form-item label="停车场名称">
        <el-input v-model="form.paking_name" style="width:30%"></el-input>
      </el-form-item>
      <el-form-item label="区域">
        <el-cascader v-model="cas_value"
                     :options="cas_options">
        </el-cascader>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="form.typeRadio">
          <el-radio label="室内"></el-radio>
          <el-radio label="室外"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="可停放车辆" style="width:15%">
        <el-input v-model="form.paking_num"></el-input>
      </el-form-item>
      <el-form-item label="禁启用">
        <el-radio-group v-model="form.disableRadio">
          <el-radio label="禁止"></el-radio>
          <el-radio label="启动"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="位置">
        <el-input type="textarea"
                  v-model="form.point"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">新增</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Paking_add',
  data() {
    return {
      form: {
        paking_name: '',
        typeRadio: '',
        paking_num: '',
        disableRadio: '',
        point: '',
        cas_value: [],
        cas_options: [{}]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped lang='scss'>
// .setInputWidth{
//   width: 40%;
// }
.el-form-item{
  margin-bottom: 30px;
}
</style>