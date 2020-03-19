<template>
    <el-dropdown>
        <span class="el-dropdown-link">设置
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
                <div @click = "logout">
                    <span><i class = "iconfont icon-tuichuyingyong"></i>退出登录</span>
                </div>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
export default {
    computed:{

    }
}
</script>
<style lang="scss" scoped>

  .el-dropdown-link{
    color: white;
  }
.user-header-image {
  display: inline-block;
  vertical-align: middle;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 4px;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  margin-top: -5px;
//   border: 1px solid $gray;
}
</style>