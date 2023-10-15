<template>
  <div class="wrapper">
    <p class="headline">Planning</p>
    <TimerAsset />
    <p class="title">Title</p>
    <CustomInput />
    <div class="line"></div>
    <div style="margin-bottom: 20px">
      <ContentShow />
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique alias et perferendis tempora ratione
      quisquam. Reprehenderit doloremque placeat enim earum quis maiores excepturi. Provident obcaecati iste amet
      architecto repellendus.</p>
    <div style="margin-top: auto">
      <ButtonSubmit />
    </div>

  </div>
</template>

<script>
import TimerAsset from '../components/timer/TimerAsset.vue'
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
  layout: 'default',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .headline {
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
