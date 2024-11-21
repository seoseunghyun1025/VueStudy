import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
window.Kakao.init('d2133b057cef69356f65f4ddd8275ca9')
