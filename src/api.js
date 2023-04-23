const ip = window.location.hostname;
const port = 8080
function getBaseHost() {
  debugger
  return ip + ':' + port
}

export default {
  // 核心区文件上传 (头像)
  fileUpload: "http://localhost:8080/basic/upload"
}
