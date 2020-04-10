import backup from './backup'
import { config } from '../package.json'
backup.init({ ak: config.ak, sk: config.sk, bucket: config.bucket });
backup.backup(process.argv[2], process.argv[3]);
