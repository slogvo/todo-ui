<template>
  <div style="position: relative">
    <label>{{ label }}</label>
    <v-snackbar
      v-model="snackbar.show"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
    >
      {{ snackbar.message }}
    </v-snackbar>
    <v-text-field
      v-bind="{ ...$attrs, ...commonAttrs }"
      v-model="inputValue"
      v-on="$listeners"
    >
      <template
        v-for="(_, scopedSlotName) in $scopedSlots"
        #[scopedSlotName]="slotData"
      >
        <slot :name="scopedSlotName" v-bind="slotData" />
      </template>
      <template v-for="(_, slotName) in $slots" #[slotName]>
        <slot :name="slotName" />
      </template>
    </v-text-field>
    <img
      class="copy-icon"
      src="~/assets/imgs/copy-icon.png"
      alt="My Image"
      @click="copyToClipboard"
    />
  </div>
</template>

<script>
import { Clipboard } from '@capacitor/clipboard'

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputValue: '',
      snackbar: {
        show: false, // Ẩn hiển thông báo
        message: '', // Nội dung thông báo
        timeout: 2000, // Thời gian hiển thị (ms)
        color: '', // Màu sắc của thông báo
      },
    }
  },
  computed: {
    commonAttrs() {
      return {
        label: '',
        persistentHint: true,
        outlined: true,
        dense: true,
        hideDetails: false,
        class: {
          'mt-1': this.$props.label,
        },
        placeholder: 'Enter your task',
      }
    },
  },
  methods: {
    async copyToClipboard() {
      const content = this.inputValue //

      try {
        await Clipboard.write({
          string: content,
        })
        this.showNotification('Copied to clipboard!')
      } catch (error) {
        this.showNotification('Copy unsuccessful!')
      }
    },
    showNotification(message) {
      this.snackbar.message = message
      this.snackbar.show = true
      this.snackbar.color = 'success' // Màu sắc của thông báo (có thể thay đổi tuỳ theo yêu cầu)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.copy-icon {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  right: 20px;
  transform: translateY(50%);
  cursor: pointer;
  transition: all 0.25s linear;
  &:active {
    opacity: 0.5;
  }
}
</style>
