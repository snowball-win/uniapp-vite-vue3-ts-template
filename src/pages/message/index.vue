<template>
  <view class="content">
    <image class="logo" src="@/static/logo.png" />
    <video-player></video-player>
    <video-list></video-list>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $bg-color;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

</style>
