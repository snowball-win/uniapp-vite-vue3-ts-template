<template>
    <uni-rate :size="18" :value="5" />
    <view>hello-world</view>

    <button @click="apiTest">调用代理接口new</button>
    <button @click="open">打开弹窗</button>

    <uni-popup ref="popup" type="bottom" background-color="#fff">
        123456789
        <!-- <image class="logo" src="@/assets/logo.png" /> -->
    </uni-popup>
</template>

<script lang="ts">
import request from '@/utils/request'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'HelloWorld',
    setup() {
        const store = useStore()
        const popup = ref()

        console.log('useStore访问store', store.state.system.title)

        const apiTest = () => {
            request.post('/UcAuthCompany/getName').then((res: any) => {
                console.log(res)
            })
        }

        const open = () => {
            popup.value.open()
        }

        return { popup, apiTest, open }
    }
    // mounted() {
    //     console.log('this访问store', this.$store.state.system.title)
    // }
})
</script>
