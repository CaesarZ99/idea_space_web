<template>
  <el-upload
    class="avatar-uploader"
    :action="api.fileUpload"
    :show-file-list="true"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    :on-error="handleError"
    :data={captcha:this.captcha}
    drag
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">{{uploadTips}}</div>
  </el-upload>
</template>

<script>
import api from "../../api";

export default {
  props:['uploadTips', 'fileSizeLimit', 'acceptFileTypes', 'captcha'],
  computed: {
    api() {
      return api
    }
  },
  data() {
    return {
      imageUrl: ''
    };
  },
  methods: {
    handleAvatarSuccess(res, file, fileList) {
      this.$emit("handleAvatarSuccess")
      if (res.code === 0) {
        this.$message.error(res.message);
        this.removeFile(file, fileList)
        return
      }
      this.$message.success('上传成功~~~');
      this.$emit("handleAvatarSuccess",res.data)
      fileList.splice (0,fileList.length)
    },

    removeFile(file, fileList) {
      fileList.forEach((item,index)=>{
        if (file.uid === item.uid) {
          fileList.splice(index,1)
        }
      })
    },

    beforeAvatarUpload(file) {
      const isJPG = this.acceptFileTypes.indexOf(file.type) !== -1;
      const isLt4M = file.size / 1024 / 1024 < this.fileSizeLimit;

      if (!this.captcha) {
        this.$message.warning('请输入验证码');
        return false
      }

      if (!isJPG) {
        this.$message.error(this.uploadTips);
      }
      if (!isLt4M) {
        this.$message.error(`上传文件不能超过${this.fileSizeLimit}M`);
      }

      return isJPG && isLt4M;
    },
    handleError(err, file, fileList) {
      this.$message.error('上传出现异常!');
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
