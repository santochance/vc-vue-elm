<template>
  <div>Profile</div>
</template>

<script>

  export default {
    name: 'Profile',
    components: {
      Page,
    },
    props: {
      
    },
    data() {
      return {
        
      }
    },
    methods: {
      random(min, max) {
        return Math.floor(min + Math.random() * (max - min))
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
