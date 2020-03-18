<template>
    <div>
        <el-aside width="200px">
                        <el-row class="tac">
                            <el-col :span="12">
                                <el-menu default-active="/page-list"  router >
                                    <el-menu-item index="/page-list">
                                        <i class="el-icon-mobile"></i>
                                        <span slot="title">我的作品</span>
                                    </el-menu-item>
                                        <el-menu-item index="/my-template">
                                        <i class="el-icon-document"></i>
                                        <span slot="title">我的模板</span>
                                    </el-menu-item>
                                        <el-menu-item index="/page-data">
                                            <i class="el-icon-menu"></i>
                                            <span slot="title">我的数据</span>
                                        </el-menu-item>
                                        <el-menu-item index="/template-list">
                                            <i class="el-icon-s-shop"></i>
                                            <span slot="title">创意模板</span>
                                        </el-menu-item>
                                    </el-menu>
                            </el-col>
                        </el-row>
                    </el-aside>
    </div>
</template>
<script>
export default {
    name: 'SideBar',
    
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
