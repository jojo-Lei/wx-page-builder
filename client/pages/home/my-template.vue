<template>
    <div class = 'clearfix my-page-list'>
        <div class="page-search-wrapper">
            <el-tabs >
                <el-tab-pane name="h5"><div slot="label"><span class="nav-tabs-label">H5</span></div></el-tab-pane>
                <el-tab-pane name="longPage"><div slot="label"><span class="nav-tabs-label">长页H5</span></div></el-tab-pane>
                <el-tab-pane name="relative"><div slot="label"><span class="nav-tabs-label">排版图文</span></div></el-tab-pane>
                <el-tab-pane name="pc"><div slot="label"><span class="nav-tabs-label">PC页面</span></div></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    data(){

    },
    methods:{

    },
}
</script>
<style>
    .nav-tabs-label{
    display: inline-block;
    padding: 0 16px;
    height: 60px;
    line-height: 60px;
  }
</style>

