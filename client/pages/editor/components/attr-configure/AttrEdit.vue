<template>
    <el-scrollbar class="components-attr-edit">
        <div class="attr-edit-inner" v-if="activeElementUUID">
            <div class="props-attr-style">
                <propsAttr></propsAttr>
            </div>
            <div class="common-attr-style">
                <baseAttr></baseAttr>
            </div>
        </div>
        <div class="" v-else>
            <p class="gray text-center paddingT30">在画布上选择要编辑的元素</p>
        </div>
    </el-scrollbar>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import baseAttr from './attr-props-components/BaseAttr';
import propsAttr from './attr-props-components/props-attr/index.vue'
export default {
    components:{
        baseAttr,
        propsAttr
    },
    computed:{
        ...mapState({
            projectData: state => state.editor.projectData,
            activePageUUID: state => state.editor.activePageUUID,
            activeElementUUID: state => state.editor.activeElementUUID
        }),
        ...mapGetters([
            'currentPageIndex',
            'activeElementIndex',
        ])
    }
}
</script>
