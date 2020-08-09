<template>
  <div id=''>
    <div class="headerForm">
      <el-row :gutter="20">
        <el-col :span="18">
          <el-form :inline="true"
                   :model="formInline"
                   class="demo-form-inline">
            <el-form-item label="停车场名称">
              <el-input v-model="formInline.paking_name"
                        placeholder="请输入">
              </el-input>
            </el-form-item>
            <el-form-item label="区域">
              <el-cascader v-model="cas_value"
                           :options="cas_options">
              </el-cascader>
            </el-form-item>
            <el-form-item label="类型">
              <el-select v-model="formInline.type"
                         placeholder="请选择">
                <el-option label="室内"
                           value="shanghai">
                </el-option>
                <el-option label="室外"
                           value="beijing">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <router-link to="addPaking">
            <el-button type="primary">新增停车场</el-button>
          </router-link>
        </el-col>
      </el-row>

    </div>
    <div class="form_table">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column type="selection"
                         width="50">
        </el-table-column>
        <el-table-column prop="paking_name"
                         label="停车场名称"
                         width="180">
        </el-table-column>
        <el-table-column prop="type"
                         label="类型"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="区域">
        </el-table-column>
        <el-table-column prop="fullNum"
                         label="可停放车辆">
        </el-table-column>
        <el-table-column prop="disable"
                         label="禁启用">
          <!-- 使用作用域插槽便于挂载数据 -->
          <template v-slot:default="slotProps">
            <el-switch v-model="slotProps.row.disable"
                       active-color="#13ce66"
                       inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="point"
                         label="查看位置">
        </el-table-column>
        <el-table-column prop="operation"
                         label="操作">
          <template v-slot:default="slotProps">
            <el-button size="mini"
                       @click="handleEdit(slotProps.$index, slotProps.row)">编辑</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(slotProps.$index, slotProps.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      formInline: {
        paking_name: '',
        area: '',
        type: ''
      },
      cas_value: [],
      cas_options: [],
      tableData: [
        {
          paking_name: '喜来登',
          type: '室内',
          address: '上海市普陀区金沙江路 1518 弄',
          fullNum: 20,
          disable: true,
          point: '415632.2562'
        }
      ],
      switchValue: true
    }
  },
  methods: {
    handleEdit() {},
    handleDelete() {}
  }
}
</script>

<style scoped lang='scss'>
</style>