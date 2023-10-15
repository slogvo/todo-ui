<template>
  <div class="timer-container">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="(month, index) in months"
          :key="index"
          class="swiper-slide month-slide"
        >
          <span class="slider-content">{{ month }}</span>
        </div>
      </div>
    </div>

    <ul class="dates">
      <li
        v-for="(day, index) in days"
        :key="index"
        :class="{ 'day-item': true, 'day-isActive': day.isActive }"
        @click="setActiveDay(index)"
      >
        <span class="day-name">{{ day.name }}</span>
        <span class="day-num">{{ day.num }}</span>
      </li>
    </ul>
    <div class="timer-choose">
      <div class="time-start">
        <span class="label-time">Start time</span>
        <div class="content-time">
          <TimePicker></TimePicker>
          <p>AM</p>
        </div>
      </div>
      <p class="line">-</p>
      <div class="time-end">
        <span class="label-time">End time</span>
        <div class="content-time">
          <TimePicker></TimePicker>
          <p>PM</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import TimePicker from './TimePicker.vue'

export default {
  components: { TimePicker },
  data() {
    return {
      dayIsActive: false,
      activeMonthIndex: 0,
      swiper: null,
      days: [
        { name: 'Mon', num: '02', isActive: false },
        { name: 'Tue', num: '03', isActive: false },
        { name: 'Wed', num: '04', isActive: false },
        { name: 'Thu', num: '05', isActive: true },
        { name: 'Fri', num: '06', isActive: false },
        { name: 'Sat', num: '07', isActive: false },
        { name: 'Sun', num: '08', isActive: false },
      ],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    }
  },
  // mounted() {
  //   //   const elements = this.$refs.splide
  //   //   const list = Array.from(elements).filter((element) => {
  //   //     return (
  //   //       element.$el.classList.contains('is-active') &&
  //   //       element.$el.classList.contains('is-visible')
  //   //     )
  //   //   })
  // },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay])
    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 30,
      loop: false,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: null,
      },
      watchOverflow: true,
      centeredSlides: true,
      initialSlide: 2,
    })
    this.swiper = swiper
  },

  methods: {
    setActiveDay(index) {
      this.days.forEach((day, i) => {
        if (i === index) {
          day.isActive = true
        } else {
          day.isActive = false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

ul,
li {
  list-style: none;
}
.swiper {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 30px;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}
.timer-container {
  margin-top: 40px;

  .months {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 34px;
    cursor: pointer;
  }

  .month-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto !important;
    cursor: pointer;
  }
  .splide__slide {
    width: auto !important;
    padding: 0 15px;
  }
  .swiper-slide-active {
    color: $primary-color;
    font-size: 20px;
    font-family: 'Inter-SemiBold';
  }
  .dates {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    .day-isActive {
      background-color: $primary-color;
      color: #fff !important;
      border-radius: 8px;
    }
    .day-item {
      font-size: 14px;
      font-family: 'Inter-Medium';
      color: $text-02;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 7px;
      padding: 10px 5px;
      cursor: pointer;
      width: 48px;
      .day-num {
        font-family: 'Inter-SemiBold';
        color: $text-01;
      }
    }
    .day-isActive .day-num {
      color: #fff !important;
    }
  }

  .timer-choose {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Inter-Medium';
    .line {
      color: #c7c7c7;
      margin-top: 30px;
    }
    .content-time {
      display: flex;
      align-items: center;
      margin-top: 10px;
      gap: 10px;
    }
    .label-time {
      color: $text-02;
    }
  }
}

@media screen and (min-width: 280px) and (max-width: 368.8px) {
  .timer-choose {
    flex-direction: column;
    align-items: start !important;
  }

  .time-start,
  .time-end {
    width: 100%;
  }
  .day-item {
    font-size: 12px !important;
  }
  .line {
    display: none;
  }
}

@media screen and (max-width: 318.8px) {
  body {
    font-size: 12px;
  }
}
</style>
