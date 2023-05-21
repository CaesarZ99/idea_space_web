
const ip = window.location.hostname;
const mainPort = 8080
const mainContext = '/space-main'
const filePort = 8080
const fileContext = '/space-file'
function getBaseHost() {
    return 'http://caesar.icu'
  // return 'http://localhost:8080'
}

export default {
  // 核心区文件上传 (头像)
  fileUpload: getBaseHost() + mainContext + '/basic/upload',
  getBasicUserInfo: getBaseHost() + mainContext + '/basic/userInfo',
  getCaptCha: getBaseHost() + mainContext + '/basic/getCaptCha'
}
