<template>
    <view class="content">
        <!-- <image class="logo" src="@/assets/logo.png" /> -->
        <view>哈哈哈哈new2</view>
        <view class="text-area">
            <text class="title">{{ title }}</text>
        </view>
        <hello-world></hello-world>
        <view @click="toVideo()">to video</view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
const toVideo = () => {
    uni.navigateTo({
        url: '/pages/video/index'
    })
}
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
    width: 200rpx;
    height: 200rpx;
    margin: 50rpx auto;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    color: #8f8f94;
    font-size: 36rpx;
}
</style>
