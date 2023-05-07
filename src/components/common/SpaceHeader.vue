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
      <uploader :uploadTips="uploadTips" :fileSizeLimit="fileSizeLimit" :acceptFileTypes="acceptFileTypes" @handleAvatarSuccess="changeAvatarUrl"/>
      <div slot="footer" class="dialog-footer">
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SpaceAvatar from "../tools/SpaceAvatar.vue";
import Uploader from "../tools/AvatarUploader.vue";
export default {
  name: "SpaceHeader",
  components: {SpaceAvatar,Uploader},
  data() {
    return {
      circleUrl: this.userInfo.avatarFile.url,
      outerVisible: false,
      innerVisible: false,
      uploadTips: '只能上传 jpg/png/gif 类型文件',
      // 上传文件限制4MB
      fileSizeLimit: 4,
      acceptFileTypes: ['image/jpeg','image/png','image/gif']
    }

  },
  methods: {
    changeAvatarUrl(value) {
      this.outerVisible = false
      this.circleUrl = value
      console.log(value)
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
