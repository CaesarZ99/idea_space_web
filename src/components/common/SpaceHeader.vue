<template>
  <div style="float: right;">
    <el-dropdown>
      <SpaceAvatar class="el-dropdown-link" :circleUrl="circleUrl" size="large" ></SpaceAvatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
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
      circleUrl: "https://idea-space-1305173419.cos.ap-guangzhou.myqcloud.com/HeadSculpture.jpg"
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
