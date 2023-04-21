<template>
  <div>

    <span><el-link href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2023003731号-1</el-link></span>
    <el-divider direction="vertical"></el-divider>
    <span>
      <el-tooltip  placement="top" effect="light">
        <div slot="content"><el-image style="width: 200px;height: 200px" src="https://idea-space-1305173419.cos.ap-guangzhou.myqcloud.com/WeChatCode.jpg"/></div>
        <el-button style="background-color: #ccd7d7;border: 0 ;padding: 0">联系我</el-button>
      </el-tooltip>
    </span>
  </div>
</template>

<script>
export default {
  name: "SpaceFooter",
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.el-link {
  line-height: normal;
}
.el-divider {
  background-color: #6fa576;
  position: relative;
}
</style>
