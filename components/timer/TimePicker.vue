<template>
  <div class="timer-picker">
    <div class="timer-input">
      <input
        v-model="hours"
        type="number"
        inputmode="numeric"
        pattern="\d{2}:\d{2}"
        min="00"
        max="12"
        :maxlength="2"
        @input="updateTime"
      />
      <span>:</span>
      <input
        v-model="minutes"
        type="number"
        inputmode="numeric"
        pattern="\d{2}:\d{2}"
        min="00"
        max="59"
        :maxlength="2"
        @input="updateTime"
      />
    </div>
    <!-- <div class="timer-preview">{{ formattedTime }}</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: 0,
      minutes: 0,
    }
  },
  computed: {
    formattedTime() {
      const hours = this.padZero(this.hours)
      const minutes = this.padZero(this.minutes)
      return `${hours}:${minutes}`
    },
  },
  methods: {
    updateTime() {
      this.$emit('time-updated', this.formattedTime)
    },
    padZero(value) {
      // Thêm vào trước để đủ tối đa 2 ký tự trong chuỗi
      return value.toString().padStart(2, '0')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.timer-picker {
  .timer-input {
    width: 120px;
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    input {
      width: 40px;
      margin: 0 5px;
      font-size: 16px;
      outline: none;
      font-family: 'Inter-Medium';
    }
  }
}

@media screen and (min-width: 280px) and (max-width: 368.8px) {
  .timer-picker,
  .timer-input {
    width: 100% !important;
    justify-content: start !important;
  }
  .timer-input {
    padding-left: 10px;
  }
}
</style>
