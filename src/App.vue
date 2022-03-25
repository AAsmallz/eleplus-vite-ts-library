<script setup lang="ts">
  const handle = (row: any,column: any,cell:any,event:any):any => {}
  const run = (e: any)=>{
    console.log( e, 'run处理函数成功执行' );
  } 
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ];
</script>

<template>
  <xin-table :data="tableData" :border="true" headTitle="表格测试" stripe @run="run" @cell-click="handle">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </xin-table>
</template>

<style>

</style>
