<!--

Exapmle:
<Text :ellipsis="2"
  :ellipsis-style="{ lineHeight: 1.2, backgroundColor: '#fff' }"
>文本内容</Text>

-->

<template>
  <span v-if="!ellipsis"><slot></slot></span>
  <span v-else-if="ellipsis === 1" class="ellipsis"><slot></slot></span>
  <span v-else :class="multiEllipsisClass" :style="multiEllipsisStyle"><slot></slot></span>
</template>

<script>
  let lineClampSupported = false

  try {
    lineClampSupported = 'webkitLineClamp' in window.getComputedStyle(document.body)
    console.warn('[-webkit-line-clamp] not supported')
  } catch(e) {/* empty */}

  export default {
    name: 'Text',
    prop: {
      ellipsis: {
        type: Number,
        default: 0,
      },
      ellipsisStyle: {
        type: Object,
      }
    },
    data() {
     return {

     }
    },
    computed: {
      multiEllipsisClass() {
        if (!this.ellipsis) return ''
        return lineClampSupported ? 'line-clamp' : 'pseudo-ellipsis'
      },
      multiEllipsisStyle() {
        if (!this.ellipsis) return null
        const lineCount = this.ellipsis
        return lineClampSupported ? {
          '-webkit-line-clamp': lineCount
        } : this.resolveEllipsisStyle(lineCount, this.ellipsisStyle)
      },
    },
    methods: {
      resolveEllipsisStyle(lineCount, style) {
        if (!lineCount) return null

        const lineHeight = style.lineHeight
        const bgColor = style.bgColor
        if (!bgColor) console.warn(`
          'background-color' should be set for browser not support '-webkit-line-clamp'
        `)
        return {
          lineHeight: lineHeight,
          maxHeight: lineHeight * lineCount + 'em',
          backgroundColor: bgColor,
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .line-clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* -webkit-line-clamp: 3; */
  }

  .pseudo-ellipsis {
    overflow: hidden;
    /* line-height: 1.2; */
    /* max-height: calc(1.2em * 3); */
    position: relative;
    text-align: justify; // 使用 jusitfy 对齐看上去更整齐？
    margin-right: -1em;
    padding-right: 1em;
    /* set for :after inherit */
    background: #fff;
    &:before {
      content: '...';
      position: absolute;
      right: 0;
      bottom: 0;
    }
    &:after {
      content: '...';
      position: absolute;
      right: 0;
      color: transparent;
      background: inherit;
    }
  }
</style>

