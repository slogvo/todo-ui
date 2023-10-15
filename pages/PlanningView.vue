<template>
  <div class="wrapper">
    <HeaderView :title="title" />
    <TimerAsset />
    <p class="title">Title</p>
    <CustomInput />
    <div class="line"></div>
    <div style="margin-bottom: 60px;">
      <ContentShow />
    </div>
    <div :class="[{ 'sticky-footer': $vuetify.breakpoint.md }]">
      <ButtonSubmit />
    </div>
  </div>
</template>

<script>
import TimerAsset from '../components/timer/TimerAsset.vue'
import CustomInput from '../components/CustomInput.vue'
import ContentShow from '../components/ContentShow.vue'
import ButtonSubmit from '../components/ButtonSubmit.vue'
import HeaderView from '../components/HeaderView.vue'

export default {
  components: {
    CustomInput,
    TimerAsset,
    ContentShow,
    ButtonSubmit,
    HeaderView
  },
  layout: 'default',
  data() {
    return {
      title: 'Planning',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

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

  .sticky-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    padding: 15px 25px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
}
</style>
