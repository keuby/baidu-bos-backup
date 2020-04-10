# Baidu BOS Backup

## 构建方式

1. 打开 `package.json` 文件，在 `config` 中配置 `ak`, `sk`, `bucket`

2. 构建

   ```bash
   yarn
   yarn build
   ```

## 使用方法

第一个参数为本地需要备份的目录路径，第二个参数为百度云 BOS 上的路径，文件名自动为 `年-月-日-15位随机字符串.zip`

```bash
node backup.js /local/source/path baidu/backup/path
```

## 设置定时任务

```bash
crontab -e

# 第一次进入可能需要选择编辑器，直接回车即可
# 进入编辑模式之后，在最后一行添加如下内容

0 0 * * * /path/to/backup.js /path/to/source baidu/bos/path >> /var/log/backup.log 2>&1

# 上述内容为 每日 00:00 执行备份
```

> server host 上必须安装 nodejs 环境，可以使用 `apt install nodejs` 安装
