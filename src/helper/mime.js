const path = require('path')

const mimeTypes = {
  'css': 'text/css',
  'html': 'text/html',
  'jpeg': 'image/jpeg',
  'ipg': 'image/ipg',
  'js': 'text/javascript',
  'png': 'image/png',
  'txt': 'text/plain',
  'xml': 'text/xml',
  'json':'application/json'
}
module.exports = (filePath)=>{
  let ext = path.extname(filePath)
    .split('.')
    .pop()
    .toLowerCase()
  if(!ext){
    ext = filePath
  }

  return mimeTypes[ext] || mimeTypes['txt']
}