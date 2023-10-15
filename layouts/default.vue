<template>
  <div :class="['screen', { 'max-screen': $vuetify.breakpoint.lgAndUp }, { 'full-screen': $vuetify.breakpoint.md }]">
    <Nuxt />
  </div>
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

.max-screen {
  max-width: 430px;
}

.full-screen {
  height: 100%;
  margin: auto;
  border-radius: 0;
}

.position-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/*
@media screen and (min-width: 768px) {
  .screen {
    max-width: 430px;
  }
}

@media screen and (max-width: 478.8px) {
  .screen {
    height: 100vh;
    margin: auto;
    border-radius: 0;
  }
}

@media screen and (min-width: 430px) {
  .screen {
    width: 430px;
  }
}*/
</style>
