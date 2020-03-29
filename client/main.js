import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpServer from '@client/service/httpServer' // axios拦截器配置
import '@client/store/permission' // 权限控制
import * as mUtils from '@/assets/js/mUtils'
import config from '@/config'
import filters from './filters/index'
import AES from '@/assets/js/secret'
import userModel from '@client/mixins/userModel'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import Mock from 'mockjs'
const baseUrl = config.baseURL;
Mock.mock(baseUrl + '/auth/login', {
     "message":"成功","code":200,"body":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMTIzIiwiX2lkIjoiNWU2ZDkyNTU0NjQ2MmUyYjk3ZWVhNTI0IiwiaWF0IjoxNTg1NDk5NTA2LCJleHAiOjE1ODU1ODU5MDZ9.KYJsNyAmgjj9JCDWcdmU4XBUgUdGM9eaue_rr3byn0I"},"status":true
});
Mock.mock( RegExp(baseUrl + '/page/myPages' + ".*"), {
	"message":"成功","code":200,"body":[{"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"外卖商家宣传","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":false,"members":[],"_id":"5e6d9bd583e25a2f62d5b0a9","pages":[{"uuid":"4f4b81c5-8f20-4bd7-9405-6680f1402fcd","name":"","elements":[{"uuid":"c178a790-afd3-4606-b8ef-8fb5cbf992e1","elName":"qk-button","animations":[],"commonStyle":{"position":"absolute","width":140,"height":40,"top":71,"left":90,"rotate":0,"paddingTop":10,"paddingLeft":0,"paddingRight":0,"paddingBottom":10,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":1,"borderColor":"#999999","borderStyle":"solid","borderRadius":4,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":6},"events":[{"type":"link","url":"https://es6.ruanyifeng.com/?search=%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0&x=0&y=0#docs/array"},{"type":"share","url":""}],"propsValue":{"text":"按 钮"},"valueType":"String","isForm":false},{"uuid":"b9ba0ad7-169e-48fd-ab20-448e0670713a","elName":"qk-image-carousel","animations":[],"commonStyle":{"position":"absolute","width":375,"height":210,"top":277,"left":-1,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":5},"events":[],"propsValue":{"imageSrcList":["http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg"],"interval":2500},"valueType":"String","isForm":false},{"uuid":"0316c384-0115-4a9f-94f9-1dd19cc00014","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":252,"height":40,"top":184,"left":53,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":3},"events":[],"propsValue":{"text":"这是一段文字"},"valueType":"String","isForm":false},{"uuid":"e8479ff6-d0e6-4330-b5ee-e0262e9452df","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":214,"left":7,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":4},"events":[],"propsValue":{"text":"这是一段文字222222222"},"valueType":"String","isForm":false}],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}},{"uuid":"28aa130d-48ec-4de5-850c-2266eccafad6","name":"","elements":[{"uuid":"8f64b144-c053-4159-b8cc-fafc4bb740ef","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":200,"left":0,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":2},"events":[],"propsValue":{"text":"这是一段文字112324"},"valueType":"String","isForm":false},{"uuid":"58a49bdd-3ca5-4f76-99ae-bc5a032c193b","elName":"qk-image-carousel","animations":[],"commonStyle":{"position":"absolute","width":375,"height":210,"top":285,"left":3,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":2},"events":[],"propsValue":{"imageSrcList":["http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg"],"interval":2500},"valueType":"String","isForm":false}],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-15T03:07:01.694Z","updated":"2020-03-27T16:30:45.577Z","__v":0},{"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"微信展示页","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":false,"members":[],"_id":"5e7386c42183def29908c15f","pages":[{"uuid":"feaaca53-651e-46b5-a3ac-c208626da08f","name":"","elements":[],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-19T14:50:44.588Z","updated":"2020-03-19T14:50:44.588Z","__v":0},{"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"幼儿园宣传","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":false,"members":[],"_id":"5e787cfb2183def29908c160","pages":[{"uuid":"1dd63552-c62f-4ff7-960d-8a0543d0eed0","name":"","elements":[],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-23T09:10:20.011Z","updated":"2020-03-23T09:10:20.011Z","__v":0},{"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"微信活动宣传页","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":false,"members":[],"_id":"5e7c7f24ce7520f9b445c367","pages":[{"uuid":"2c0aaddb-59be-4bfc-81a8-4d2659ffb490","name":"","elements":[],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-26T10:08:36.016Z","updated":"2020-03-26T10:08:36.016Z","__v":0},{"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"微信裂变宣传","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":false,"members":[],"_id":"5e7d963cce7520f9b445c373","pages":[{"uuid":"bf5be845-16f5-494e-b586-c00733528f1e","name":"","elements":[],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-27T05:59:24.618Z","updated":"2020-03-27T05:59:24.618Z","__v":0},{"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"微信社区宣传","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":false,"members":[],"_id":"5e7e14dcce7520f9b445c37b","pages":[{"uuid":"2158c11c-fc34-41f2-ba32-b5ec22f0ad21","name":"","elements":[{"uuid":"34aa699a-98b3-4925-a179-886cbd19c310","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":200,"left":0,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":1},"events":[],"propsValue":{"text":"这是一段文字"},"valueType":"String","isForm":false}],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-27T14:59:40.178Z","updated":"2020-03-27T14:59:55.254Z","__v":0},{"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"微商活动页","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":false,"members":[],"_id":"5e7e2abace7520f9b445c37e","pages":[{"uuid":"ff4075c6-0d38-4ebb-9afa-d5cb402ca725","name":"","elements":[],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-27T16:32:58.080Z","updated":"2020-03-27T16:32:58.080Z","__v":0}],"status":true
});
Mock.mock( RegExp(baseUrl + '/page/myPages/count' + ".*"), {
	"message":"成功","code":200,"body":{"my":7,"share":0},"status":true
});
Mock.mock( RegExp(baseUrl + '/page/myTemplate' + ".*"), {
	"message":"成功","code":200,"body":[{"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"微信展示页","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":true,"members":[],"_id":"5e7c7f36ce7520f9b445c368","pages":[{"uuid":"4f4b81c5-8f20-4bd7-9405-6680f1402fcd","name":"","elements":[{"uuid":"f690842c-f93a-4f71-a7b5-c05874aec500","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":200,"left":0,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":1},"events":[],"propsValue":{"text":"这是一段文字"},"valueType":"String","isForm":false},{"uuid":"85d1a9c8-8e8f-4e60-a7d3-7cdf2eacf5d1","elName":"qk-image","animations":[],"commonStyle":{"position":"absolute","width":375,"height":200,"top":327,"left":32,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":2},"events":[],"propsValue":{"imageSrc":"http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg"},"valueType":"String","isForm":false},{"uuid":"20d64128-2dd1-41bc-b4aa-51afdf8ca3b4","elName":"qk-image","animations":[],"commonStyle":{"position":"absolute","width":375,"height":200,"top":200,"left":0,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":3},"events":[],"propsValue":{"imageSrc":"http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg"},"valueType":"String","isForm":false},{"uuid":"c178a790-afd3-4606-b8ef-8fb5cbf992e1","elName":"qk-button","animations":[],"commonStyle":{"position":"absolute","width":140,"height":40,"top":75,"left":89,"rotate":0,"paddingTop":10,"paddingLeft":0,"paddingRight":0,"paddingBottom":10,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":1,"borderColor":"#999999","borderStyle":"solid","borderRadius":4,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":4},"events":[],"propsValue":{"text":"按 钮"},"valueType":"String","isForm":false},{"uuid":"7e627012-2c09-4005-a2f7-ea065bc3d7a8","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":145,"left":15,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":5},"events":[],"propsValue":{"text":"这是tupianzuhe "},"valueType":"String","isForm":false}],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-15T03:07:01.694Z","updated":"2020-03-15T03:07:01.694Z","__v":0},{"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"外卖商家宣传","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":true,"members":[],"_id":"5e7e1b86ce7520f9b445c37d","pages":[{"uuid":"4f4b81c5-8f20-4bd7-9405-6680f1402fcd","name":"","elements":[{"uuid":"f690842c-f93a-4f71-a7b5-c05874aec500","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":197,"left":5,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":4},"events":[],"propsValue":{"text":"这是一段文字22222"},"valueType":"String","isForm":false},{"uuid":"c178a790-afd3-4606-b8ef-8fb5cbf992e1","elName":"qk-button","animations":[],"commonStyle":{"position":"absolute","width":140,"height":40,"top":72,"left":89,"rotate":0,"paddingTop":10,"paddingLeft":0,"paddingRight":0,"paddingBottom":10,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":1,"borderColor":"#999999","borderStyle":"solid","borderRadius":4,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":5},"events":[{"type":"link","url":"https://es6.ruanyifeng.com/?search=%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0&x=0&y=0#docs/array"},{"type":"share","url":""}],"propsValue":{"text":"按 钮"},"valueType":"String","isForm":false},{"uuid":"7e627012-2c09-4005-a2f7-ea065bc3d7a8","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":145,"left":15,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":6},"events":[],"propsValue":{"text":"这是tupianzuhe 2222222"},"valueType":"String","isForm":false},{"uuid":"b9ba0ad7-169e-48fd-ab20-448e0670713a","elName":"qk-image-carousel","animations":[],"commonStyle":{"position":"absolute","width":375,"height":210,"top":277,"left":-1,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":4},"events":[],"propsValue":{"imageSrcList":["http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg"],"interval":2500},"valueType":"String","isForm":false}],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}},{"uuid":"28aa130d-48ec-4de5-850c-2266eccafad6","name":"","elements":[],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-15T03:07:01.694Z","updated":"2020-03-15T03:07:01.694Z","__v":0}],"status":true
});

Mock.mock( RegExp(baseUrl + '/page/detail' + ".*"), {
	"message":"成功","code":200,"body":{"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"外卖商家宣传","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":false,"members":[],"_id":"5e6d9bd583e25a2f62d5b0a9","pages":[{"uuid":"4f4b81c5-8f20-4bd7-9405-6680f1402fcd","name":"","elements":[{"uuid":"c178a790-afd3-4606-b8ef-8fb5cbf992e1","elName":"qk-button","animations":[],"commonStyle":{"position":"absolute","width":140,"height":40,"top":71,"left":90,"rotate":0,"paddingTop":10,"paddingLeft":0,"paddingRight":0,"paddingBottom":10,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":1,"borderColor":"#999999","borderStyle":"solid","borderRadius":4,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":6},"events":[{"type":"link","url":"https://es6.ruanyifeng.com/?search=%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0&x=0&y=0#docs/array"},{"type":"share","url":""}],"propsValue":{"text":"按 钮"},"valueType":"String","isForm":false},{"uuid":"b9ba0ad7-169e-48fd-ab20-448e0670713a","elName":"qk-image-carousel","animations":[],"commonStyle":{"position":"absolute","width":375,"height":210,"top":277,"left":-1,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":5},"events":[],"propsValue":{"imageSrcList":["http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg"],"interval":2500},"valueType":"String","isForm":false},{"uuid":"0316c384-0115-4a9f-94f9-1dd19cc00014","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":252,"height":40,"top":184,"left":53,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":3},"events":[],"propsValue":{"text":"这是一段文字"},"valueType":"String","isForm":false},{"uuid":"e8479ff6-d0e6-4330-b5ee-e0262e9452df","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":214,"left":7,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":4},"events":[],"propsValue":{"text":"这是一段文字222222222"},"valueType":"String","isForm":false}],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}},{"uuid":"28aa130d-48ec-4de5-850c-2266eccafad6","name":"","elements":[{"uuid":"8f64b144-c053-4159-b8cc-fafc4bb740ef","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":200,"left":0,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":2},"events":[],"propsValue":{"text":"这是一段文字112324"},"valueType":"String","isForm":false},{"uuid":"58a49bdd-3ca5-4f76-99ae-bc5a032c193b","elName":"qk-image-carousel","animations":[],"commonStyle":{"position":"absolute","width":375,"height":210,"top":285,"left":3,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":2},"events":[],"propsValue":{"imageSrcList":["http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg"],"interval":2500},"valueType":"String","isForm":false}],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-15T03:07:01.694Z","updated":"2020-03-27T16:30:45.577Z","__v":0},"status":true
});
 Mock.mock( RegExp(baseUrl + '/page/update' + ".*"), {
	"message":"成功","code":200,"body":{"n":1,"nModified":1,"ok":1},"status":true
 });

 Mock.mock( RegExp(baseUrl + '/page/view' + ".*"), 
	`<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <title></title>
	  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	  <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
	  <meta name="keywords" content="">
	  <meta name="description" content="">
	  <meta name="renderer" content="webkit">
	  <meta name="robots" content="index, follow">
	  <meta name="format-detection" content="telephone=no">
	  <script src="/third-libs/vue.js"></script>
	  <link rel="stylesheet" href="/third-libs/animate.min.css">
	  <link rel="stylesheet" href="/third-libs/swiper.min.css">
	  <script src="/third-libs/swiper.min.js"></script>
	
	  <!--引入模板-->
	  <script src="/engine_libs/h5-swiper/page-engine.umd.js"></script>
	  <link rel="stylesheet" href="/engine_libs/h5-swiper/page-engine.css">
	  <style>
		* {
		  padding: 0;
		  margin: 0;
		  box-sizing: border-box;
		}
		html, body, #app{
		  position: relative;
		  width: 100%;
		  height: 100%;
		}
		.swiper-container {
		  position: relative;
		  width: 100%;
		  height: 100vh;
		}
	  </style>
	  <script>
		  window._pageData = {"shareConfig":{"coverImage":"","title":"这是#分享者#的大力推荐","description":"这是#分享者#大力推荐的H5"},"title":"page1222","coverImage":"","description":"我用夸克可视化编辑器做了一个超酷炫的H5，快来看看吧。","script":"","width":375,"height":644,"pageMode":"h5","flipType":0,"slideNumber":false,"status":1,"isPublish":false,"isTemplate":false,"members":[],"_id":"5e6d9bd583e25a2f62d5b0a9","pages":[{"uuid":"4f4b81c5-8f20-4bd7-9405-6680f1402fcd","name":"","elements":[{"uuid":"c178a790-afd3-4606-b8ef-8fb5cbf992e1","elName":"qk-button","animations":[],"commonStyle":{"position":"absolute","width":140,"height":40,"top":71,"left":90,"rotate":0,"paddingTop":10,"paddingLeft":0,"paddingRight":0,"paddingBottom":10,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":1,"borderColor":"#999999","borderStyle":"solid","borderRadius":4,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":6},"events":[{"type":"link","url":"https://es6.ruanyifeng.com/?search=%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0&x=0&y=0#docs/array"},{"type":"share","url":""}],"propsValue":{"text":"按 钮"},"valueType":"String","isForm":false},{"uuid":"b9ba0ad7-169e-48fd-ab20-448e0670713a","elName":"qk-image-carousel","animations":[],"commonStyle":{"position":"absolute","width":375,"height":210,"top":277,"left":-1,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":5},"events":[],"propsValue":{"imageSrcList":["http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg"],"interval":2500},"valueType":"String","isForm":false},{"uuid":"0316c384-0115-4a9f-94f9-1dd19cc00014","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":252,"height":40,"top":184,"left":53,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":3},"events":[],"propsValue":{"text":"这是一段文字"},"valueType":"String","isForm":false},{"uuid":"e8479ff6-d0e6-4330-b5ee-e0262e9452df","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":214,"left":7,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":4},"events":[],"propsValue":{"text":"这是一段文字222222222"},"valueType":"String","isForm":false}],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}},{"uuid":"28aa130d-48ec-4de5-850c-2266eccafad6","name":"","elements":[{"uuid":"8f64b144-c053-4159-b8cc-fafc4bb740ef","elName":"qk-text","animations":[],"commonStyle":{"position":"absolute","width":375,"height":40,"top":200,"left":0,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":2},"events":[],"propsValue":{"text":"这是一段文字112324"},"valueType":"String","isForm":false},{"uuid":"58a49bdd-3ca5-4f76-99ae-bc5a032c193b","elName":"qk-image-carousel","animations":[],"commonStyle":{"position":"absolute","width":375,"height":210,"top":285,"left":3,"rotate":0,"paddingTop":0,"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"marginTop":0,"marginLeft":0,"marginRight":0,"marginBottom":0,"borderWidth":0,"borderColor":"","borderStyle":"solid","borderRadius":0,"boxShadow":"","fontSize":16,"fontWeight":500,"lineHeight":1.4,"letterSpacing":0,"textAlign":"center","color":"#000000","backgroundColor":"","backgroundImage":"","backgroundSize":"cover","opacity":1,"zIndex":2},"events":[],"propsValue":{"imageSrcList":["http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg","http://seopic.699pic.com/photo/50051/4111.jpg_wh1200.jpg"],"interval":2500},"valueType":"String","isForm":false}],"commonStyle":{"backgroundColor":"","backgroundImage":"","backgroundSize":"cover"}}],"author":"5e6d925546462e2b97eea524","created":"2020-03-15T03:07:01.694Z","updated":"2020-03-29T17:41:37.780Z","__v":0}
	  </script>
	</head>
	<body>
	<div id="app">
	  <engine-h5-swiper  />
	</div>
	<script type="text/javascript">(function (w) {w.frontjsConfig = {token: "878e39b4ff1b6f0984e3113216eee917", behaviour: 3, optimisedForSPA: true, useHistory: true};w.frontjsTmpData = {r:[],e:[],l:[]};w.frontjsTmpCollector = function (ev) {(ev.message ? window.frontjsTmpData.e : window.frontjsTmpData.r).push([new Date().getTime(), ev])};w.FrontJS = {addEventListener: function (t, f) {w.frontjsTmpData.l.push([t, f]);return f;},removeEventListener: function (t, f) {for (var i = 0; i < w.frontjsTmpData.l.length; i++) {t === w.frontjsTmpData.l[i][0] && f === w.frontjsTmpData.l[i][1] && w.frontjsTmpData.l.splice(i, 1);}return f;}};w.document.addEventListener("error", w.frontjsTmpCollector, true);w.addEventListener("error", w.frontjsTmpCollector, true);w.addEventListener("load", function () {var n = w.document.createElement("script");n.src = "https://static.frontjs.com/dist/current/tracker.min.js"; w.document.body.appendChild(n);}, true);})(window);</script>
	<script>
	  new Vue({
		  el:"#app"
	  })
	</script>
	<script>
	  // 判断翻页类型
	  var direction = _pageData.flipType === 0 ? 'vertical' : 'horizontal'
	  var showSlideNumber = !!_pageData.slideNumber
		new Swiper('.swiper-container', {
			direction: direction,
			loop: false,
			pagination: showSlideNumber ? { el: '.swiper-pagination'} : {},
			scrollbar: {
				el: '.swiper-scrollbar',
			},
		});
	</script>
	
	<script>
		eval(window._pageData.script);
	</script>
	</body>
	</html>
	`
);

import '@/assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // 自定义 css
import 'animate.css'
import VueClipboard from 'vue-clipboard2'

Vue.use(Element);
Vue.use(VueClipboard)

/**
 * 引入公共方法mUtils
 */
Vue.prototype.$mUtils = mUtils;
Vue.prototype.AES = AES
Vue.prototype.$axios = httpServer;

/**
 * 公共配置信息
 */
Vue.prototype.$config = config

// 注册全局过滤器
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})
// 全局注册mixins
Vue.mixin(userModel); // 公共mixins

// 登录后跳转方法
Vue.prototype.goBeforeLoginUrl = () => {
	let url = mUtils.Cookie.get('beforeLoginUrl')
	url = decodeURIComponent(url)
	if (!url || url.indexOf('/author') != -1) {
		router.push('/')
	} else {
		router.push(url)
		mUtils.Cookie.set('beforeLoginUrl', '', 1 / 24 / 60, window.location.host, window.location.pathname.substring(0, window.location.pathname.length - 1))
	}
};


String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, "gm"), s2);
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
