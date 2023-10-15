<template>
  <div class="box-content">
    <div class="item-content">
      <div class="item-timer">05:00PM</div>
      <div class="item-textbox">
        <p class="item-time">5:00 - 5:30 AM</p>
        <p class="item-text">Morning workout</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.box-content {
  margin-top: 15px;

  .item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item-textbox {
      height: 80px;
      width: 75%;
      border-radius: 8px;
      background-color: rgba($primary-color, 0.1);
      padding: 15px 20px;

      .item-text {
        font-size: 18px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'Inter-SemiBold';
        color: $primary-color;
      }

      .item-time {
        font-size: 13px;
      }
    }

    .item-timer {
      color: $text-02;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

@media screen and (max-width: 478.8px) {
  .item-text {
    font-size: 16px !important;
  }
}

/*@media screen and (max-width: 318.8px) {
  .item-content {
    flex-direction: column;
    align-items: start !important;
  }
}*/
</style>
