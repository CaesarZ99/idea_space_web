<template>
  <div style="float: right;">
    <el-dropdown>
      <SpaceAvatar class="el-dropdown-link" :circleUrl="circleUrl" size="large" ></SpaceAvatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import SpaceAvatar from "../tools/SpaceAvatar.vue";

export default {
  name: "SpaceHeader",
  components: {SpaceAvatar},
  data() {
    return {
      circleUrl: "/static/images/HeadSculpture.jpg"
    }

  }
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  margin-top: 10px;
}
</style>
