<template>
  <div class="viewer-thumbnail__container">
    <div v-for="(item, idx) in usedItems" :key="idx"
      class="viewer-thumbnail__item">
      <img :src="item.thumbnail" alt=""
        @click="onThumbnailClick($event, idx)"
        ref="thumbnails"
      >
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ViewerModal from './ViewerModal'

  let viewerModal
  let modalMounted = false

  export default {
    name: 'Viewer',
    components: {

    },
    props: {
      items: {
        type: Array,
        required: true,
      },
      thumbnailIndex: {
        type: [String, Number, Array],
      },
    },
    data() {
      return {
        clickLocking: false,
      }
    },
    computed: {
      modal() {
        return viewerModal
      },
      usedItems() {
        if (!this.thumbnailIndex) return this.items

        if (Array.isArray(this.thumbnailIndex)) {
          const length = this.items.length

          return this.thumbnailIndex.reduce((rst, index) => {
            if (index >= 0 && index < length) {
              rst.push(this.items[index])
            }
            return rst
          }, [])
        } else {
          return [this.items[this.thumbnailIndex]]
        }
      }
    },
    mounted() {
      if (!modalMounted) {
        console.log('[viewer] mounted')
        modalMounted = true
        viewerModal = new (Vue.extend(ViewerModal))()
        viewerModal.$mount()
        document.body.appendChild(viewerModal.$el)
      }
    },
    beforeDestroy() {
      if (modalMounted) {
        console.log('[viewer] beforeDestroy')
        modalMounted = false
        document.body.removeChild(viewerModal.$el)
        viewerModal = null
      }
    },
    methods: {
      open(idx) {
        this.modal.items = this.items
        this.modal.els = this.$refs['thumbnails']
        this.modal.open(idx)
      },
      close(idx) {
        this.modal.close(idx)
      },
      onThumbnailClick(event, idx) {
        if (this.clickLocking) return Promise.resolve()
        this.clickLocking = true

        // 执行过渡
        return Promise.resolve().then(() => {
          return this.open(idx)
        }).then(() => {
          this.clickLocking = false
        })
      },
    },
  }
</script>

<style lang="scss">
  .viewer-thumbnail {@at-root {
    .viewer-thumbnail__container {
      display: flex;
    }
    .viewer-thumbnail__item {
      position: relative;
      margin: 10px 10px 10px 0;
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 100%;
      }
    }
  }}
</style>