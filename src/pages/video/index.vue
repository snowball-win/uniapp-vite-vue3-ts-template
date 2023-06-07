<template>
    <view class="content">
        <view>video</view>
        <view class="text-area">
            <text class="title">{{ title }}</text>
        </view>
        <my-video></my-video>
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
    width: 200rpx;
    height: 200rpx;
    margin: 50rpx auto;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    color: #ff0000;
    font-size: 36rpx;
}
</style>
