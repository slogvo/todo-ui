<template>
  <div style="position: relative">
    <label>{{ label }}</label>
    <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout" :color="snackbar.color" top>
      {{ snackbar.message }}
    </v-snackbar>
    <v-text-field v-bind="{ ...$attrs, ...commonAttrs }" v-model="inputValue" v-on="$listeners">
      <template v-for="(_, scopedSlotName) in $scopedSlots" #[scopedSlotName]="slotData">
        <slot :name="scopedSlotName" v-bind="slotData" />
      </template>
      <template v-for="(_, slotName) in $slots" #[slotName]>
        <slot :name="slotName" />
      </template>
    </v-text-field>
    <v-btn class="copy-icon" :class="{ 'hide-button': disableCopyButton }" @click="copyToClipboard">Copy</v-btn>
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
      isInputEmpty: true,
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
    disableCopyButton() {
      return this.isInputEmpty || this.inputValue.trim() === '';
    },
  },

  watch: {
    inputValue: function (newVal) {
      this.isInputEmpty = newVal === '';
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
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 13px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: $gray-color;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  border-radius: 8px;
  opacity: 1;
  visibility: visible;

  &:active {
    background-color: #ececec;
  }
}

.copy-icon.hide-button {
  opacity: 0;
  visibility: hidden;
}
</style>
