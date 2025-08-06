import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the main CSS file (which imports all other CSS files)
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')