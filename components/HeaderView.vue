<template>
  <v-app-bar app color="primary">
    <v-btn icon @click="goBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
  </v-app-bar>
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
    goBack() {},
  },
}
</script>

<style scoped></style>
