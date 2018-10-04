<template>
  <div class="viewer-thumbnail__container">
    <div v-for="(item, idx) in items" :key="idx"
      class="viewer-thumbnail__item" >
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

  const viewerModal = new (Vue.extend(ViewerModal))()
  let modalMounted = false

  export default {
    name: 'Viewer',
    components: {

    },
    props: {
      items: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        modal: viewerModal,
        clickLocking: false,
      }
    },
    mounted() {
      if (!modalMounted) {
        modalMounted = true
        viewerModal.$mount()
        document.body.appendChild(viewerModal.$el)
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

<style lang="scss" scoped>
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

      flex: 1 1 auto;
    }
  }}
</style>