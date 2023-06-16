<template>
    <view class="my-video-player">
        <swiper
            class="swiper"
            :circular="true"
            :vertical="true"
            :autoplay="autoplay"
            :duration="duration"
            @change="changeplay"
            @touchstart="touchStart"
            @touchend="touchEnd"
        >
            <swiper-item v-for="(item, index) in videoList" :key="index" class="swiper-item">
                <video
                    id="myVideo"
                    controls
                    :class="item.direction"
                    :src="item.url"
                    :show-fullscreen-btn="true"
                    :enable-play-gesture="true"
                    :enable-progress-gesture="true"
                    :show-center-play-btn="true"
                    :show-play-btn="false"
                    :autoplay="false"
                    object-fit="cover"
                    @error="videoErrorCallback"
                ></video>
                <view class="like" @click="onLike(item)">{{
                    (item as videoItem).like ? '已赞' : '点赞'
                }}</view>
                <view class="collect" @click="onCollect(item, index)">{{
                    (item as videoItem).collect ? '收藏' : '已藏'
                }}</view>
                <view class="author">{{ (item as videoItem).author }}</view>
                <view class="title">{{ (item as videoItem).title }}</view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import request from '@/utils/request'

interface videoItem {
    url?: string
    direction?: string
    author?: string
    title?: string
    like?: boolean
    collect?: boolean
}
let videoList: videoItem[] = reactive([
    {
        url: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
        direction: 'Horizontal', // Horizontal 横向 vertical 竖向
        author: 'snow',
        title: 'title',
        like: true,
        collect: true
    },
    {
        url: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
        direction: 'vertical',
        author: 'snow',
        title: 'title',
        like: true,
        collect: true
    },
    {
        url: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
        direction: 'Horizontal',
        author: 'snow',
        title: 'title',
        like: true,
        collect: true
    },
    {
        url: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
        direction: 'vertical',
        author: 'snow',
        title: 'title',
        like: true,
        collect: true
    },
    {
        url: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
        direction: 'Horizontal',
        author: 'snow',
        title: 'title',
        like: true,
        collect: true
    }
])

const videoErrorCallback = (e: any) => {
    console.log(e)
}

const store = useStore()
const title = ref(store.state.system.title)
// 自动播放
const autoplay: boolean = false
// 滑动动画时长
const duration: number = 300
const changeplay = (res: any) => {
    console.log('34', res)
    if (touchStartPageY < touchEndPageY) {
        console.log('向下滑动')
    } else {
        console.log('向上滑动')
    }
}
let touchStartPageY: number = 0
const touchStart = (res: any) => {
    console.log('37', res)
    touchStartPageY = res.changedTouches[0].pageY
}
let touchEndPageY: number = 0
const touchEnd = (res: any) => {
    console.log('40', res)
    touchEndPageY = res.changedTouches[0].pageY
}

const onLike = (item: videoItem) => {
    item.like = !item.like
    // request.post('/UcAuthCompany/getName').then((res: any) => {
    //     console.log(res)
    // })
}
const onCollect = (item: any, index: number): void => {
    videoList[index].collect = !videoList[index].collect
    console.log('131', videoList[index])
}
uni.setTabBarBadge({
    // 显示数字
    index: 1, // tabbar下标
    text: '6' // 数字
})
</script>

<style lang="scss">
.my-video-player {
    width: 100vw;
    height: 100%;
    background: #ccc;
    .swiper {
        height: 100%;
        &-item {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .vertical {
                width: 100%;
                height: 100%;
            }
            .Horizontal {
                width: 100%;
                height: 200px;
            }
            .like {
                position: absolute;
                bottom: 100px;
                right: 10px;
                color: #ff0000;
                font-size: 18px;
            }
            .collect {
                position: absolute;
                bottom: 50px;
                right: 10px;
                color: #ff0000;
                font-size: 18px;
            }
            .author {
                position: absolute;
                bottom: 80px;
                left: 10px;
                color: #ff0000;
                font-size: 18px;
            }
            .title {
                position: absolute;
                bottom: 50px;
                left: 10px;
                color: #ff0000;
                font-size: 18px;
            }
        }
    }
}
</style>
