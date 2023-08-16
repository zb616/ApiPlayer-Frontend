import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';
import { createPinia } from 'pinia';
import App from './App.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import JsonSchemaEditor from 'json-schema-editor-vue3';
import 'json-schema-editor-vue3/lib/json-schema-editor-vue3.css';
import ryEditTable from 'ry-edit-table'; // 引入表格插件
import 'ry-edit-table/dist/style.css'; // 引入ry-edit-table样式
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
// https://vxetable.cn/v4/#/table/edit/click
const app = createApp(App);
const store = createPinia();

app.use(ElementPlus, { locale: zhCn });
app.use(router);
app.use(store);
app.use(JsonSchemaEditor);
// app.use(ryEditTable);
app.use(VXETable);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.mount('#app');
