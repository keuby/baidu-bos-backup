import fs from 'fs'
import path from 'path'
import { zip } from 'compressing'

export async function compress (dir, prefix = '') {
  let now = new Date()
  const localDate = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-')
  const fileName = path.join('/tmp', `${prefix}${localDate}-${genRandomString()}.zip`)
  await zip.compressDir(dir, fileName)
  return fileName
}

export function remove (file) {
  return fs.unlinkSync(file)
}

const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

function genRandomString (length = 12) {
  const rs = []
  for (let i = 0; i < 12; i++) {
    let idx = Math.floor(Math.random() * chars.length)
    rs.push(chars[idx])
  }
  return rs.join('')
}
