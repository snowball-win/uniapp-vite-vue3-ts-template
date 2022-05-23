// https://vitejs.dev/config/
import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
// loadEnv 可以读取环境变量文件里的内容
console.log('19process.argv', process.cwd())
console.log('21getEnv', loadEnv(process.argv[process.argv.length-1], './env').VITE_SERVER_NAME)
export default defineConfig({
    envDir: resolve(__dirname, 'env'),
    plugins: [uni()],
    resolve: {
        // 配置别名
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    css: {
        // css预处理器
        preprocessorOptions: {
            scss: {
                // 因为uni.scss可以全局使用，这里根据自己的需求调整
                additionalData: '@import "./src/styles/global.scss";'
            }
        }
    },
    // 开发服务器配置
    server: {
        host: '0.0.0.0', // 允许本机
        port: 3000, // 设置端口
        open: false, // 设置服务启动时自动打开浏览器
        // cors: true, // 允许跨域
        // 请求代理
        proxy: {
            '/m-staff-center': { // 匹配请求路径，localhost:3000/m-staff-center，如果只是匹配/那么就访问到网站首页了
                target: loadEnv(process.argv[process.argv.length-1], './env').VITE_SERVER_NAME, // 代理的目标地址
                changeOrigin: true, // 开发模式，默认的origin是真实的 origin:localhost:3000 代理服务会把origin修改为目标地址
                // secure: true, // 是否https接口
                // ws: true,
                // rewrite target目标地址 + '/m-staff-center'，如果接口是这样的，那么不用重写
                // rewrite: (path) => path.replace(/^\/m-staff-center/, '') // 路径重写，本项目不需要重写
                // https://www.bilibili.com/video/BV1p3411J7CE?p=21
            }
        }
    },
    build: {
        // 禁用 gzip 压缩大小报告，以提升构建性能
        brotliSize: false,
        /** 配置h5打包js,css,img分别在不同文件夹start */
        assetsDir: 'static/img/',
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
            }
        }
        /** 配置h5打包js,css,img分别在不同文件夹end */
    }
})
