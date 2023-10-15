<template>
  <p class="headline">{{ title }}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    goBack() { },
  },
}
</script>

<style scoped>
.headline {
  text-align: center;
  font-family: 'Inter-SemiBold';
  font-size: 22px;
}
</style>
