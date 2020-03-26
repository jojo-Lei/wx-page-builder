<template>
    <div class="clearfix my-page-list">
    <div class="page-search-wrapper">
      <el-tabs v-model="searchParams.pageMode" @tab-click="handlePageModeClick">
        <el-tab-pane name="h5"><div slot="label"><span class="nav-tabs-label">H5</span></div></el-tab-pane>
        <el-tab-pane name="longPage"><div slot="label"><span class="nav-tabs-label">长页H5</span></div></el-tab-pane>
        <el-tab-pane name="relative"><div slot="label"><span class="nav-tabs-label">排版图文</span></div></el-tab-pane>
        <el-tab-pane name="pc"><div slot="label"><span class="nav-tabs-label">PC页面</span></div></el-tab-pane>
      </el-tabs>
    </div>
    <div class="page-content">

      <ul class="page-item-wrapper">
        <li class="page-item" v-for="(item, index) in pageList" :key="index">
          <div class="header-mask">
            <div class="details-btn" @click="showPreviewFn(item._id)">预览</div>
          </div>
          <div class="cover">
            <img :src="item.coverImage || defaultCoverImage" alt="">
          </div>
          <div class="page-item-title border-T">
            <span class="item-title-i">未命名页面</span>
          </div>
          <div class="page-item-data-pv border-T">
            <div class="btn-wrapper">
              <el-button type="text" size="mini" @click="editPage(item._id)">编辑</el-button>
            </div>
            <div class="btn-wrapper">
              <el-button type="text" size="mini" @click="copyPage(item._id)">使用模板</el-button>
            </div>
            <div class="btn-wrapper">

              <el-dropdown placement="top-start">
              <span class="el-dropdown-link">
                <el-button type="text" size="mini">更多 <i class="el-icon-more-outline"></i></el-button>
              </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <div @click="publishPage(item._id)">发布模板市场</div>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <div @click="deletePage(item._id, index)">删除</div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <notFundData v-if="!pageList.length" />
    <!--预览-->
    <previewPage v-if="showPreview" :pageId="previewId" @closePreview="showPreview = false"></previewPage>
  </div>
</template>

<script>
	import previewPage from './components/preview'
	import notFundData from '@client/components/notFundData'

export default {
    name: '',
    components:{
        previewPage,
		notFundData
    },
    data() {
			return {
				loading: false,
				defaultCoverImage: require('@client/common/images/quark--pagecover-image.jpg'),
				pageList: [],
				previewId: '',
				showPreview: false,
				searchParams: {
					pageMode: 'h5'
				}
			}
		},
		created() {
			this.getPageList();
			this.previewId = this.$route.query.previewId || ''
			if (this.previewId) {
				this.showPreview = true;
			}
		},
		methods: {
			/**
			 * 获取所有页面
			 */
			getPageList() {
				this.$axios.get('/page/myTemplate', this.searchParams).then(res => {
					this.pageList = res.body || []
				})
			},
			/**
			 * 编辑页面
			 * @param id
			 */
			editPage(id) {
				this.$router.push({path: 'editor', query: {id: id, isTemplate: true}})
			},
			/**
			 * 复制页面
			 */
			copyPage(id) {
				this.loading = true;
				this.$axios.post('/page/copy/' + id).then(res => {
					this.loading = false;
					this.$confirm('已添加至"我的作品"中?', '提示', {
						confirmButtonText: '立即编辑',
						cancelButtonText: '再逛逛',
						type: 'success'
					}).then(() => {
						this.$router.push({path: 'editor', query: {id: res.body._id}})
						}).catch(() => {})
				}).catch(() => {
					this.loading = false;
				})
			},
			/**
			 * 删除页
			 * @param id
			 * @param index
			 */
			deletePage(id, index) {
				this.$confirm('此操作将永久删除该页面, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.loading = true;
					this.$axios.delete('/page/delete/' + id).then(() => {
						this.loading = false;
						// 从页面删除
						this.pageList.splice(index, 1)
					}).catch(() => {
						this.loading = false;
					})
				})
			},
			showPreviewFn(id) {
				this.previewId = id
				this.showPreview = true;
			},
			/**
			 * 添加成员
			 */
			showAddUser(){

			},
			/**
			 * 发布模板到模板市场
			 * @param id
			 */
			publishPage(id){
				this.loading = true;
				this.$axios.post('/page/publish/' + id).then(() => {
					this.loading = false;
					this.$alert('已发布到模板市场', '操作提示', {
						confirmButtonText: '确定'
					});
				}).catch(() => {
					this.loading = false;
				})
			},
			/**
			 * 切换页面类型搜索添加
			 * @param data
			 */
			handlePageModeClick(){
				this.getPageList()
			}
		}
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

