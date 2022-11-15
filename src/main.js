import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import {Popup,Field, CellGroup,Button,Area,Picker,Radio,RadioGroup} from 'vant'
createApp(App).use(Popup).use(Field).use(CellGroup).use(Button).use(Area).use(Picker).use(Radio).use(RadioGroup).use(router).mount('#app')