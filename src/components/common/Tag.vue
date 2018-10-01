<template>
  <span class="tag">
    <span class="tag__holder">{{ $slots.default[0].text }}</span>
    <span class="tag__shadow"><slot></slot></span>
  </span>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style lang="scss" scoped>
  .tag {
    position: relative;
    display: inline-block;
    padding: 2px 4px;
    white-space: nowrap;
    border-radius: 2px;
    color: #fff;
  }
  .tag__holder {
    color: transparent;
  }
  .tag__shadow {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    transform: scale(.5);
    transform-origin: 0 0;

    color: inherit;
    font-size: 2em;
  }
</style>