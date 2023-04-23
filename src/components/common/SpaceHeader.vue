<template>
  <div style="float: right;">
    <el-dropdown>
      <SpaceAvatar class="el-dropdown-link" :circleUrl="circleUrl" size="large" ></SpaceAvatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><el-button type="text"  @click="outerVisible = true">上传头像</el-button></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog title="上传头像" :visible.sync="outerVisible">
      <el-dialog
        width="30%"
        title="上传头像"
        :visible.sync="innerVisible"
        append-to-body>
      </el-dialog>
      <uploader></uploader>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="outerVisible = false">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SpaceAvatar from "../tools/SpaceAvatar.vue";
import Uploader from "../tools/Uploader.vue";
export default {
  name: "SpaceHeader",
  components: {SpaceAvatar,Uploader},
  data() {
    return {
      circleUrl: "https://idea-space-1305173419.cos.ap-guangzhou.myqcloud.com/HeadSculpture.jpg",
      outerVisible: false,
      innerVisible: false
    }

  },
  methods: {

  }
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  margin-top: 10px;
}
</style>
