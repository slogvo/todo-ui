<template>
  <div class="wrapper">
    <div class="screen">
      <p class="screen-headline">Planning</p>
      <TimerAsset></TimerAsset>
      <p class="title">Title</p>
      <CustomInput></CustomInput>
      <div class="line"></div>
      <ContentShow></ContentShow>
      <ButtonSubmit></ButtonSubmit>
    </div>
  </div>
</template>

<script>
// import CustomInput from '../components/CustomInput.vue'
import TimerAsset from '../layouts/TimerAsset.vue'
import CustomInput from '../components/CustomInput.vue'
import ContentShow from '../components/ContentShow.vue'
import ButtonSubmit from '../components/ButtonSubmit.vue'

export default {
  components: {
    CustomInput,
    TimerAsset,
    ContentShow,
    ButtonSubmit,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.wrapper {
  width: 100%;
  max-width: 460px;
  margin: 0px auto;
  padding: 20px;
  .screen {
    background-color: #fff;
    border-radius: 16px;
    padding: 35px 30px;
    box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.15);
    .screen-headline {
      text-align: center;
      font-family: 'Inter-SemiBold';
      font-size: 22px;
    }
    .title {
      font-family: 'Inter-Medium';
      margin-top: 20px;
      color: $text-02;
      margin-bottom: 8px;
      font-size: 15px;
    }
    .line {
      width: 100%;
      height: 1px;
      background-color: #dbdbdb;
    }
  }
}
</style>
