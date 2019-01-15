<template>
  <div class="main">
    <h4> 一键链接服务器 </h4>
    <Table></Table>
  </div>
</template>

<script>
import Table from './Table';

export default {
  name: 'main',
  data() {
    return {};
  },
  components: {
    Table,
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
