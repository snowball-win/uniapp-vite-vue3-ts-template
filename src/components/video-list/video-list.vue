<template>
    <uni-rate :size="18" :value="5" />
    <view @click="open">hello-world</view>
    <uni-popup ref="popup" type="bottom" background-color="#fff">
        123456789123
    </uni-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const popup = ref()
const open = () => {
    popup.value.open()
}
</script>
