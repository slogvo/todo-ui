<template>
  <div class="box-content">
    <div class="item-content">
      <div class="item-timer">05:00PM</div>
      <div class="item-textbox">
        <p class="item-text">Morning workout</p>
        <p class="item-time">5:00 - 5:30 AM</p>
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
  margin-top: 35px;
  .item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-textbox {
      height: 80px;
      width: 280px;
      border-radius: 8px;
      border: 0.5px solid #e7e7e7;
      background: #fff;
      padding: 10px 15px;
      .item-text {
        font-size: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'Inter-SemiBold';
        font-size: 16px;
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
</style>
