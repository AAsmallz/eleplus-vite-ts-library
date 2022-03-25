<template>
  <div class="xinz-table">
    <span class="title">{{headTitle}}</span>
    <el-table :data="data" v-bind="{ ...rest, ...attrs }" v-on="methods" style="width: 100%">
      <component v-for="item in list" :is="item" :key="item"></component>
    </el-table>
  </div>
</template>

<script lang="ts">
export default {
  name: "xinTable",
};
</script>

<script lang="ts" setup>
import { useSlots, useAttrs, toRefs, reactive, computed } from 'vue';
import { ElTable } from 'element-plus';
/** 获取slots */
const slots = useSlots();
const list = computed(()=>slots.default?.())
/** 获取attrs */
const attrs = useAttrs();
/** 获取props */
interface IdefineProps {
  data: Array<any>;
  loading?: boolean;
  headTitle?: string;
  [key: string]: any;
}
const props = defineProps<IdefineProps>();
const { data, headTitle, ...rest } = toRefs(props);
/** 获取ELtable的所有事件 */
const tableEmits = ElTable.emits;
const emit = defineEmits([
  'select',
  'select-all',
  'selection-change',
  'cell-mouse-enter',
  'cell-mouse-leave',
  'cell-click',
  'cell-dblclick',
  'cell-contextmenu',
  'row-click',
  'row-contextmenu',
  'row-dblclick',
  'header-click',
  'header-contextmenu',
  'sort-change',
  'filter-change',
  'current-change',
  'header-dragend',
  'expand-change'
]);
const methods = reactive<{ [key: string]: Function }>({});
tableEmits?.forEach((item: string) => {
  methods[item] = (...args: any[]) => emit(item as any, ...args)
});
</script>

<style lang="scss">
.xinz-table {
  width: 600px;
  margin: 30px auto;
  .title {
    display: block;
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 20px;
  }
}
</style>