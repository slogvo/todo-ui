<template>
  <v-container
fluid
    :class="['screen', { 'screen-lg': $vuetify.breakpoint.lgAndUp }, { 'screen-md ': $vuetify.breakpoint.md }]">
    <Nuxt />
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.screen {
  width: 100%;
  height: 100%;
  margin: 20px auto;
  padding: 35px 25px;
  background-color: #fff;
  transition: width 0.3s ease-in-out;
  border-radius: 16px;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.15);
}

.screen-lg {
  max-width: 430px;
}

.screen-md {
  min-height: 100vh;
  overflow-y: scroll;
  margin: auto;
  border-radius: 0;
}
</style>
