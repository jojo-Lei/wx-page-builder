<template>
    <div 
        class="components-editor-shape" 
        @click="handleTopWrapperClick"
        @mousedown="handleMouseDownOnElement"
        :class="{active: this.active}"
    >
        <div 
            class="editor-shape-point"
            v-for="item in (active ? pointList : [])"
            :key="item"
            @mousedown="handleMouseDownOnPoint(item)"
            :style="getPointStyle(item)"
        >
        <slot></slot>
        </div>
    </div>
</template>

<script>
import runAnimations from '@client/assets/js/runAnimations'
import Bus from '@client/eventBus'

export default {
    name: 'editor-shape',
    props:{
        active: {
			type: Boolean,
			default: false
		},
		defaultStyle: {
			require: true,
			type: Object
		},
		uuid: String
    },
    data(){
        return{
            // l = left, t = top, r = right, b = bottom
			pointList: ['lt', 'rt', 'lb', 'rb', 'l', 'r', 't', 'b'],
            // 上下左右 对应的 东南西北
            directionKey:{
                t: 'n',
                b: 's',
                l: 'w',
                r: 'e'
            }
        }
    },
    mounted(){
        this.animatePlaying = false;
		Bus.$on('RUN_ANIMATIONS', (uuid, animations) => {
			if (uuid !== this.uuid) {
				return;
			}
			// 正在执行的动画不允许插入新动画
			if(this.animatePlaying) return;
			let cssText = this.$el.style.cssText;
			this.animatePlaying = true;
			runAnimations(this.$el, animations, true, () => {
				this.$el.style.cssText = cssText
				this.animatePlaying = false;
			})
		})
    },
    methods:{
        /**
		 * 获取point计算后样式
		 * @param point
		 * @returns {{}}
		 */
        getPointStyle(point){
            const pos = this.defaultStyle;
            const height = pos.height;
            const width = pos.width;

            let hasT = /t/.test(point)
			let hasB = /b/.test(point)
			let hasL = /l/.test(point)
            let hasR = /r/.test(point) 
            let newLeft = 0
            let newTop = 0

            if (point.length === 2) {
					newLeft = hasL ? 0 : width
					newTop = hasT ? 0 : height
			} else {``
				// !#zh 上下点，宽度固定在中间
				if (hasT || hasB) {
					newLeft = width / 2
					newTop = hasT ? 0 : height
				}
				// !#zh 左右点，高度固定在中间
				if (hasL || hasR) {
					newLeft = hasL ? 0 : width
					newTop = height / 2
				}
            }
            const style = {
				marginLeft: (hasL || hasR) ? '-5px' : 0,
				marginTop: (hasT || hasB) ? '-5px' : 0,
				left: `${newLeft}px`,
				top: `${newTop}px`,
				cursor: point.split('').reverse().map(m => this.directionKey[m]).join('') + '-resize'
			}
			return style
        },
        /**
		 * 点击事件，点击后设置当前元素为选中元素
		 */
        handleTopWrapperClick(e){
            e.stopPropagations();
            e.preventDefaylt();
        },
        /**
		 * 鼠标选中元素拖拽事件
		 * @param e
		 */
        handleMouseDownOnPoint(e){
            // 抛出事件让父组件设置当前元素选中状态
            this.$emit('handleElementClick');
            const pos = {...this.defaultStyle}
			let height = pos.height
			let width = pos.width
			let top = pos.top
			let left = pos.left
			let startX = downEvent.clientX
			let startY = downEvent.clientY
			let move = moveEvent => {
			    let currX = moveEvent.clientX
				let currY = moveEvent.clientY
				let disY = currY - startY
				let disX = currX - startX
				let hasT = /t/.test(point)
				let hasB = /b/.test(point)
				let hasL = /l/.test(point)
				let hasR = /r/.test(point)
				let newHeight = +height + (hasT ? -disY : hasB ? disY : 0)
				let newWidth = +width + (hasL ? -disX : hasR ? disX : 0)
				pos.height = newHeight > 0 ? newHeight : 0
				pos.width = newWidth > 0 ? newWidth : 0
				pos.left = +left + (hasL ? disX : 0)
				pos.top = +top + (hasT ? disY : 0)
				this.$emit('resize', pos)
            }
            let up = ()=> {
                this.$emit('resize');
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);
            }
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        }
    }
}
</script>
<style lang="scss" scoped>
  .edit-shape-point {
    width: 10px;
    height: 10px;
    background-color: #fff;
    border: 1px solid #59c7f9;
    border-radius: 10px;
    position: absolute;
    z-index: 1001;
  }

  .components-edit-shape {
    cursor: move;
    &.active {
      outline: 1px dashed #25A589;
    }
    &:hover {
      outline: 1px dashed #25A589;
    }
  }
</style>

