<!--

Exapmle:
<Text :ellipsis="2"
  :ellipsis-style="{ lineHeight: 1.2, backgroundColor: '#fff' }"
>文本内容</Text>

-->

<template>
  <span v-if="!lineCount"><slot></slot></span>
  <span v-else-if="lineCount === 1" class="ellipsis"><slot></slot></span>
  <span v-else :class="multiEllipsisClass" :style="multiEllipsisStyle"><slot></slot></span>
</template>

<script>
  let lineClampSupported = false

  try {
    lineClampSupported = 'webkitLineClamp' in window.getComputedStyle(document.body)
  } catch(e) {
    console.warn('[-webkit-line-clamp] not supported')
  }

  export default {
    name: 'vText',
    props: {
      ellipsis: {
        type: [Number, String],
        default: 1,
      },
      ellipsisStyle: {
        type: Object
      },
      pseudoEllipsis: {
        type: Boolean,
        default: false
      },
    },
    data() {
     return {

     }
    },
    computed: {
      lineCount() {
        return this.ellipsis === '' ? 1 : Number(this.ellipsis)
      },
      multiEllipsisClass() {
        if (!this.lineCount) return
        return lineClampSupported ? 'line-clamp' : !this.pseudoEllipsis ? 'line-limit' : 'pseudo-ellipsis'
      },
      multiEllipsisStyle() {
        if (!this.lineCount) return null
        return lineClampSupported ? {
          '-webkit-line-clamp': this.lineCount
        } : this.resolveEllipsisStyle(this.lineCount, this.ellipsisStyle)
      },
    },
    methods: {
      resolveEllipsisStyle(lineCount, ellipsisStyle) {
        if (!lineCount) return null

        const lineHeight = ellipsisStyle.lineHeight
        if (!lineHeight) console.error('"lineHeihgt" prop is expected in "ellipsisStyle" but got emtpy')

        const style = {
          lineHeight: ellipsisStyle.lineHeight,
          maxHeight: lineHeight * lineCount + 'em',
        }

        if (this.pseudoEllipsis) {
          const backgroundColor = ellipsisStyle.backgroundColor
          if (!backgroundColor) console.error('when use pseudo ellipsis, "backgroundColor" prop must be provided in "ellipsisStyle"')
          style.backgroundColor = ellipsisStyle.backgroundColor
        }

        return style
      }
    }
  }
</script>

<style lang="scss">
  .ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .multi-ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* -webkit-line-clamp: 3; */
    /* line-height: 1.2; */
    /* max-height: calc(1.2em * 3); */
    text-align: justify;
  }

  .line-clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* -webkit-line-clamp: 3; */
    text-align: justify;
  }

  .line-limit {
    overflow: hidden;
    /* line-height: 1.2; */
    /* max-height: calc(1.2em * 3); */
    text-align: justify;
  }

  .pseudo-ellipsis {
    overflow: hidden;
    /* line-height: 1.2; */
    /* max-height: calc(1.2em * 3); */
    text-align: justify; // 使用 jusitfy 对齐看上去更整齐？
    position: relative;
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

