<template>
  <div class="wrapper">
    <HeaderView :title="title" />
    <TimerContainer />
    <v-btn icon @click="openZalo">
      <v-icon>Zalo</v-icon>
    </v-btn>
    <p class="title">Title</p>
    <CopyTextField />
    <div class="line"></div>
    <div style="margin-bottom: 60px">
      <BoxContent />
    </div>
    <div :class="[{ 'sticky-footer': $vuetify.breakpoint.md }]">
      <ButtonArea />
    </div>
  </div>
</template>

<script>
import { Capacitor } from '@capacitor/core'
import HeaderView from '~/components/HeaderView.vue'
import TimerContainer from '~/components/timer/TimerContainer.vue'
import CopyTextField from '~/components/CopyTextField.vue'
import BoxContent from '~/components/BoxContent.vue'
import ButtonArea from '~/components/ButtonArea.vue'

export default {
  name: 'App',
  components: {
    HeaderView,
    TimerContainer,
    CopyTextField,
    BoxContent,
    ButtonArea,
  },
  layout: 'default',
  data() {
    return {
      title: 'Planning',
      phoneNumber: '0522464846',
    }
  },
  methods: {
    openZalo() {
      const zaloUrl = `https://zalo.me/${this.phoneNumber}`
      if (this.$config.isNative) {
        const { Browser } = Capacitor.Plugins
        Browser.open({ url: zaloUrl })
      } else {
        window.open(zaloUrl, '_blank')
      }
    },
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
