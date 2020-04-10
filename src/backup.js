import path from 'path'
import { compress, remove } from './file'
import { init ,uploadFile } from './bos'

export default {
  init,
  backup: async function (source, dir) {
    console.log('\n开始备份数据: ' + new Date().toString())
    console.log('正在压缩文件...')
    const fileName = await compress(source)
    console.log('正在上传文件...')
    await uploadFile(fileName, path.join(dir, path.basename(fileName)))
    console.log('正在清理缓存文件...')
    remove(fileName)
    console.log('数据备份完成')
  }
}
