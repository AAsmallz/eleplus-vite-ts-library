import { App } from 'vue';
import xinTable from './xin-table.vue';

export default {
  install(app: App) {
    app.component(xinTable.name, xinTable);
  }
};
