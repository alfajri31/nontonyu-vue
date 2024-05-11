import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routes/index.js";

createApp(App).use(router).mount('#app')
