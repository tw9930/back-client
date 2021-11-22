<template>
<el-container>
  <!-- 头部 -->
  <el-header>

   <div>
 <ul>
   <li>   
     审核：  
      <el-select v-model="value" clearable placeholder="待审核" size="small" >
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
     </el-option>
     </el-select>
  </li>
   <li>   
     审核:
      <el-select v-model="value" clearable placeholder="待审核" size="small" >
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
     </el-option>
     </el-select>
  </li>
   <li>   
     单据状态:
      <el-select v-model="value" clearable placeholder="待审核" size="small" >
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
     </el-option>
     </el-select>
  </li>
   <li>   
     药房药库: 
      <el-select v-model="value" clearable placeholder="待审核" size="small" >
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
     </el-option>
     </el-select>
  </li>
   <li>   
     常用时段:
      <el-select v-model="value" clearable placeholder="待审核" size="small" >
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
     </el-option>
     </el-select>
  </li>
   <li>   
     从
      <el-select v-model="value" clearable placeholder="待审核" size="small" >
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
     </el-option>
     </el-select>
     到
       <el-select v-model="value" clearable placeholder="待审核" size="small" >
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
     </el-option>
     </el-select>
  </li>
 </ul>
   </div>


  </el-header>
  <!-- 身体 -->
  <el-main>
    
<div>
    <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="行号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="审核人"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="制单时间">
    </el-table-column>
    <el-table-column
      prop="address"
      label="单据序号">
    </el-table-column>
    <el-table-column
      prop="address"
      label="类型">
    </el-table-column>
    <el-table-column
      prop="address"
      label="合计成本">
    </el-table-column>
    <el-table-column
      prop="address"
      label="零售合计">
    </el-table-column>
    <el-table-column
      prop="address"
      label="放入仓库">
    </el-table-column>
    <el-table-column
      prop="address"
      label="开单人">
    </el-table-column>
    <el-table-column
      prop="address"
      label="》》》">
    </el-table-column>
  </el-table>
</div>

  </el-main>
  <!-- 尾部 -->
  <el-footer>

<el-row>
<el-button type="danger" disabled>删除</el-button> <el-checkbox v-model="checked"> 是否隐藏</el-checkbox>
<span>
  <el-button type="primary" disabled>设置</el-button>
  <el-button type="success" disabled>页面</el-button>
  <el-button type="info" disabled>打印</el-button>
  <el-button type="warning" disabled>刷新</el-button>
  <el-button type="warning" disabled>明细</el-button>
  <el-button type="warning" disabled>关闭</el-button>

</span>

</el-row>

  </el-footer>
</el-container>
</template>
<script>
export default {
  data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
}
</script>
<style lang="less" scoped>
.el-container {

  height: 80%;
 
}

.el-header {
  background-color: #f2f2f2;
  div{
    margin: auto 0;
  }
  // position: relative;
  ul{
    display: flex;
    li{
      margin-left:20px ;
  }
  }
  .el-select{
  // position: absolute;
   width: 100px;
    // bottom: 0;
   }
}
 
.el-footer {  
  background-color: #f2f2f2;
 .el-row{
  
   span{
    float: right;

   }
 }
}
</style>