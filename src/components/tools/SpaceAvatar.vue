<template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="demo-basic--circle">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "SpaceAvatar",
  props:["circleUrl","size"],
  data () {
    return {
    }
  }
}
</script>
