<template>
  <div>
    <el-table :data="tableData"
    border
    style="width: 100%"
    :row-class-name="tableRowClassName"
    >
    <el-table-column
      prop="title"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px"> {{ scope.row.type ? 'mysql' : 'redis' }}</span>
      </template>
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
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    linkServer({ address, type }) {
      this.$confirm(`您将打开 ${type ? 'mysql' : 'redis'} 地址为 ${address}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        // 链接服务器
        axios({
          method: 'post',
          url: 'http://127.0.0.1:3000/link',
          data: {
            address,
            type,
          },
        }).then(() => {
          this.$message({
            type: 'success',
            message: '链接成功!'
          });
        })
       
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消链接'
        });          
      });
      
      // console.log(address, type);
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
 .warning-row {
    background: #213a14;
  }

  .success-row {
    background: #f0f9eb;
  }
</style>
