<template>
  <div class="screen">
    <p class="screen-headline">Planning</p>
    <TimerAsset></TimerAsset>
    <p class="title">Title</p>
    <CustomInput></CustomInput>
    <div class="line"></div>
    <div style="margin-bottom: 20px">
      <ContentShow></ContentShow>
    </div>
    <div style="margin-top: auto">
      <ButtonSubmit></ButtonSubmit>
    </div>
  </div>
</template>

<script>
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

.screen {
  background-color: #fff;
  border-radius: 16px;
  padding: 35px 25px;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.15);
  display: flex;
  width: 100%;
  height: 100%;
  margin: 20px auto;
  transition: width 0.3s ease-in-out;
  flex-direction: column;
  .screen-headline {
    text-align: center;
    font-family: 'Inter-SemiBold';
    font-size: 22px;
  }
  .title {
    font-family: 'Inter-Medium';
    margin-top: 20px;
    color: $text-02;
    margin-bottom: 10px;
    font-size: 15px;
  }
  .line {
    width: 100%;
    height: 1px;
    margin-top: 20px;
    background-color: #dbdbdb;
  }
}

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
}
</style>
