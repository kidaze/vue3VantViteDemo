import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import {Form,PasswordInput,NumberKeyboard,Dialog,Popup,Field, CellGroup,Button,Area,Picker,Radio,RadioGroup,Checkbox, CheckboxGroup} from 'vant'
createApp(App).use(Form).use(PasswordInput).use(NumberKeyboard).use(Dialog).use(Popup).use(Field).use(CellGroup).use(Button).use(Area).use(Picker).use(Radio).use(RadioGroup).use(Checkbox).use(CheckboxGroup).use(router).mount('#app')