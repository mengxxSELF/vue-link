<template>
  <div>
    <el-table :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="title"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="300">
      <template slot-scope="scope">
        <el-button @click="linkServer(scope.row)" type="text" size="small">链接服务器</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'table',
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    // 请求数据
    // axios.get('/api/list').then((data) => {
    axios.get('http://127.0.0.1:3000/list').then(({ data }) => {
      console.log('data', data);
      this.tableData = data.result;
    });
  },
  methods: {
    linkServer({ address, type }) {
      // 链接服务器
      axios({
        method: 'post',
        url: 'http://127.0.0.1:3000/link',
        data: {
          address,
          type,
        },
      });
      console.log(address, type);
    },
  },
};
</script>


<style scoped>
div {
  width: 80%;
  min-width: 450px;
  margin: 0 auto;
}
</style>
