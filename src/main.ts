import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'

import gloablComponent from './components/index'

import axios from 'axios'
import router from './router'
import pinia from './store'
import './permisstion'
// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     passwird: '111111',
//   },
// })
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(createPinia())
app.use(gloablComponent)
app.use(router)
app.use(pinia)
app.mount('#app')
