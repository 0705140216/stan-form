import Vue from 'vue'
import App from './App'

//注册组件
import StForm from '@/components/st-form/st-form'
import StFormItem from '@/components/st-form-item/st-form-item'



Vue.config.productionTip = false

App.mpType = 'app'

Vue.component('st-form', StForm)
Vue.component('st-form-item', StFormItem)


const app = new Vue({
	...App
})
app.$mount()
