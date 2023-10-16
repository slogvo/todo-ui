<template>
  <div class="timer-picker">
    <div class="timer-input">
      <input v-model="hours" type="number" inputmode="numeric" pattern="\d{2}:\d{2}" min="0" max="12" :maxlength="2"
        @input="validateTime" />
      <span>:</span>
      <input v-model="minutes" type="number" inputmode="numeric" pattern="\d{2}:\d{2}" min="0" max="59" :maxlength="2"
        @input="validateTime" />
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
    };
  },
  computed: {
    formattedTime() {
      const hours = this.padZero(this.hours);
      const minutes = this.padZero(this.minutes);
      return `${hours}:${minutes}`;
    },
  },
  methods: {
    validateTime() {
      if (this.hours < 0 || isNaN(this.hours)) {
        this.hours = 0;
      } else if (this.hours > 12) {
        this.hours = 12;
      }

      if (this.minutes < 0 || isNaN(this.minutes)) {
        this.minutes = 0;
      } else if (this.minutes > 59) {
        this.minutes = 59;
      }

      this.$emit('time-updated', this.formattedTime);
    },
    padZero(value) {
      return value.toString().padStart(2, '0');
    },
  },
};
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