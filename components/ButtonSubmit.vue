<template>
  <div class="button-area" :style="buttonAreaClass">
    <v-btn x-large> Create a new task</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    buttonAreaClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.button-area {
  display: flex;
}
</style>
