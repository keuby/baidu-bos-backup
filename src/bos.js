const { BosClient } = require('@baiducloud/sdk')

let client = null
let globalBucket = ''

export function init ({ ak, sk, bucket }) {
  client = new BosClient({
    credentials: { ak, sk }
  })
  globalBucket = bucket
}

export function uploadFile (file, name, bucket = globalBucket) {
  return client.putObjectFromFile(bucket, name, file)
}
