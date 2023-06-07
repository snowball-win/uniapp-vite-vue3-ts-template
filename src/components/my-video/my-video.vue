<template>
    <view>my video new</view>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
console.log("12", store)
</script>
