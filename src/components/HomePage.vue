<template>
  <div>
    <el-container>
      <el-header><SpaceHeader></SpaceHeader></el-header>
      <el-main></el-main>
      <el-footer class="footer"><SpaceFooter></SpaceFooter></el-footer>
    </el-container>

  </div>
</template>

<script>
import SpaceFooter from "./common/SpaceFooter.vue";
import SpaceHeader from "./common/SpaceHeader.vue";
export default {
  name: "HomePage",
  components: {SpaceHeader, SpaceFooter}
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #f4f6f5;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 860px;
}

body > .el-container {
  margin-bottom: 40px;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 0;
  line-height:60px;
  text-align:center;
}

</style>
