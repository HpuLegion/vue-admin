<template>
  <div>
      <el-row :gutter="14">
        <el-col :span='2'>关键词：</el-col>
        <el-col :span='3'>
            <Select :configDataClass="configData" ></Select>
        </el-col>
        <el-col :span='5'>
            <el-input> </el-input>
        </el-col>
        <el-col :span='10'>
            <el-button type="danger">搜索</el-button>
        </el-col>
        <el-col :span="4">
            <el-button type="danger" class="pull_right" size="small">新增用户</el-button>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import Select from '@c/Select.vue'
export default {
  name: '',
  components:{Select},
  data () {
    return {
      configData:["name","phone"],
    }
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
  .pull_right{
    float: right;
  }
</style>