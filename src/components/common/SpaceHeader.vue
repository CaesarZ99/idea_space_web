<template>
  <div style="float: right;">
    <el-dropdown>
      <SpaceAvatar class="el-dropdown-link" :circleUrl="circleUrl" size="large" ></SpaceAvatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><el-button type="text"  @click="openDialog">上传头像</el-button></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog title="上传头像" :visible.sync="outerVisible">
      <el-dialog
        width="30%"
        title="上传头像"
        :visible.sync="innerVisible"
        append-to-body>
      </el-dialog>
      <uploader :uploadTips="uploadTips" :fileSizeLimit="fileSizeLimit" :acceptFileTypes="acceptFileTypes"
                @handleAvatarSuccess="changeAvatarUrl" :captcha="captcha"/>
        <div>
          <label for="captcha">
            验证码:
            <el-tooltip class="item" effect="dark" content="请输入正确的验证码后上传文件" placement="top">
              <el-input style="width: 250px" name="captcha" v-model="captcha"></el-input>
            </el-tooltip>
          </label>
          <img v-show="this.captchaUrl" class="captcha-img" :src="this.captchaUrl" @click="refreshCaptcha" />
          <el-link :underline="false" type="primary" style="margin-left: 20px" v-show="!this.captchaUrl" @click="getCaptchaImg">
            刷新验证码<i class="el-icon-refresh  el-icon--right"></i>
          </el-link>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import SpaceAvatar from "../tools/SpaceAvatar.vue";
import Uploader from "../tools/AvatarUploader.vue";
import api from "../../api";
import axios from "axios";

export default {
  name: "SpaceHeader",
  components: {SpaceAvatar,Uploader},
  data() {
    return {
      captcha: '',
      circleUrl: this.userInfo.avatarFile.url,
      outerVisible: false,
      innerVisible: false,
      uploadTips: '只能上传 jpg/png/gif 类型文件',
      // 上传文件限制4MB
      fileSizeLimit: 4,
      acceptFileTypes: ['image/jpeg','image/png','image/gif'],
      captchaUrl: ''
    }

  },
  computed: {
    api() {
      return api
    }
  },
  created() {
  },
  methods: {
    changeAvatarUrl(value) {
      if (value) {
        this.outerVisible = false
        this.circleUrl = value
        this.captcha = '';
      }
      this.captchaUrl = api.getCaptCha+'?time=' + new Date().getTime()
    },
    refreshCaptcha() {
      this.getCaptchaImg()
    },
    getCaptchaImg() {
      var date = new Date();
      axios.get(api.getCaptCha+'?time=' + date.getTime(),{
        responseType: 'blob'
      }).then(res=>{
        if (!res.data || res.data.size === 0) {
          this.captchaUrl = ''
          this.$message.error('验证码刷新频繁/失败, 请在五分钟后重试');
        } else {
          let blob = new Blob([res.data]);   // 返回的文件流数据
          // 将他转化为路径
          this.captchaUrl = window.URL.createObjectURL(blob)  // 将转换出来的路径赋值给变量，其实和上一步结合就可以
        }
      })
    },
    openDialog() {
      this.outerVisible = true
      this.getCaptchaImg()
    }
  }
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  margin-top: 10px;
}
.captcha-img{
  top: 13px;
  position: relative;
}
</style>
