<template>
    <div class = "page-home" >
         <!-- <el-container>
                <HeaderBar></HeaderBar>
                <el-container>
                    <SideBar></SideBar>   
                    <el-container>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                        <el-main>
                            <router-view></router-view>
                        </el-main>
                    </el-container>
                </el-container>
            </el-container> -->
        <div class="home-side-bar">
            <el-menu default-active="/page-list"  router >
                <el-menu-item index="/page-list">
                    <i class="el-icon-s-platform"></i>
                    <span slot="title">项目管理</span>
                </el-menu-item>
                <el-menu-item index="/my-template">
                    <i class="el-icon-s-shop"></i>
                    <span slot="title">模板管理</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="clearfix my-page-list">
             <router-view class="sub-page"/>
        </div>
    </div>
</template>

<script>

  export default {
    
  }
</script>

<style lang="scss" scoped>
  .page-home {
    display: flex;
    width: 100%;
    height: 100%;
    background: rgb(240, 243, 244);
    .home-side-bar{
      width: 140px;
      background-color: #fff;
      border-right: 1px solid #e6ebed;
      padding-top: 8px;
      z-index: 2;
    }
    .my-page-list{
      flex: 1;
      height: 100%;
      .sub-page{
        height: 100%;
      }
    }
  }

</style>
