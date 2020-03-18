<template>
        <el-header>
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple">H5</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">长页H5</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">排版图文</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">PC页面</div></el-col>
            </el-row>
        </el-header>
</template>
<script>
export default {
    name: 'MainHeaderBar'
}
</script>
<style>
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

