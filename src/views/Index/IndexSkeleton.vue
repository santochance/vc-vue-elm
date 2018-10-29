<script>

  export default {
    name: 'IndexSkeleton',
    components: {

    },
    props: {
      headerLoaded: Boolean,
      entriesLoaded: Boolean,
      listLoaded: Boolean,
    },
    data() {
      return {
        // headerLoaded: false,
        // entriesLoaded: false,
        // listLoaded: false,
      }
    },
    computed: {
      visible() {
        return !this.headerLoaded || !this.entriesLoaded || !this.listLoaded
      },
    },
  }
</script>

<template>
  <div class="shell" v-show="visible">
    <header class="shell__header"
      :style="{ visibility: !headerLoaded ? 'visible' : 'hidden' }"
    ></header>
      <div class="shell__entries"
        :style="{ visibility: !entriesLoaded ? 'visible' : 'hidden' }"
      >
        <div class="shellAnimation b-index-entries__entries">
          <div v-for="n in 10"
            :key="n"
            class="b-index-entries_entry"
          >
            <div class="b-index-entries_entry-icon">
            </div>
            <p class="b-index-entries_entry-title"></p>
          </div>
        </div>
      </div>
    <div class="shell__list"
      v-show="!listLoaded"
    >

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .shell {}

    .shell__header {
      height: 190px;
      background: #0096ff;
    }
    .shell__entries {
      background-color: #fff;
    }
    .shell__list {
      background-color: #fff;
    }
    // .shell__section {
    //   overflow: hidden;
    //   height: 354px;
    //   text-align: center;
    //   background-color: #fff;
    // }
    // .shell__item {
    //   display: inline-block;
    //   width: 20%;
    //   margin-top: 22px;
    //   &:before,
    //   &:after {
    //     content: '';
    //     display: block;
    //     margin-left: auto;
    //     margin-right: auto;
    //     background-color: #f4f4f4;
    //   }
    //   &:before {
    //     width: 90px;
    //     height: 90px;
    //     border-radius: 50%;
    //   }
    //   &:after {
    //     font-size: 24px;
    //     height: 1.2em;
    //     line-height: 1.2;
    //   }
    // }

    .b-index-entries__entries {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      height: 354px;
      text-align: center;
    }
    .b-index-entries_entry {
      width: 20%;
      margin-top: 22px;
      img {
        display: inline-block;
      }
    }
    .b-index-entries_entry-icon {
      position: relative;
      display: inline-block;
      width: 90px;
      height: 90px;

      border-radius: 50%;
      background-color: #f4f4f4;
    }
    .b-index-entries_entry-title {
      display: inline-block;
      margin-top: 10px;
      font-size: 24px;
      height: 1.2em;
      line-height: 1.2;
      color: #666;

      width: 3em;
      background-color: #f4f4f4;
    }

    .shell__list {
      padding: 8px 0;
      &:after {
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        margin-left: auto;
        margin-right: auto;
        border: 4px solid transparent;
        border-top-color: #2395ff;
        border-radius: 50%;

        animation: spin .5s linear infinite;
      }
    }

  .shellAnimation {
    animation: shellPulse 1s infinite;
  }
  @keyframes shellPulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .7;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>