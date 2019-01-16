<template>
  <div class="main">
    <h4> 一键链接服务器 </h4>
    <el-button type="text" @click="showModal" v-on:hideForm="hideModal">增加配置</el-button>
    <Form v-if="isShow" v-on:hideForm="hideModal" ></Form>
    <Table v-bind:tableData="tableData" v-on:edit="editServer" ></Table>
  </div>
</template>

<script>
import axios from 'axios';
import Table from './Table';
import Form from './Form';
import Edit from './Edit';

export default {
  name: 'main',
  data() {
    return {
      isShow: false,
      tableData: [],
    };
  },
  components: {
    Table,
    Form,
  },
  mounted() {
    // 请求数据
    axios.get('/list').then(({ data }) => {
    // axios.get('http://127.0.0.1:3000/list').then(({ data }) => {
      const { result } = data;
      this.tableData = result;
      // 将数据保存在本地
      window.localStorage.setItem('tableData', JSON.stringify(result));
      // console.log(localStorage.tableData);
    });
  },
  methods: {
    editServer({ id, title, type, address }) {
      const info = { title, type, address };
      console.log(info);
      // 编辑服务器信息
      this.$msgbox({
        title: '编辑',
        // message: <Edit v-bind:title={title}></Edit>,
        message: <Edit type={type} address={address} title={title}></Edit>,
      });
    },
    showModal() {
      this.isShow = true;
    },
    hideModal(info) {
      if (info) {
        const { address, title, type } = info;
        // 添加服务器 -- 直接将本地数据进行添加 不进行新的请求
        this.tableData.push({ address, title, type });
      }
      this.isShow = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
