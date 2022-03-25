import { createApp } from 'vue'
import App from './App.vue'
/** 引入element-plus */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/** 全局引入封装组件 */
import xinTable from './components/table'

const app = createApp(App);
app.use(xinTable);
app.use(ElementPlus);
app.mount('#app');
