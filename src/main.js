import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import VueLuckyCanvas from '@lucky-canvas/vue'



const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(VueLuckyCanvas)
app.mount("#app")

