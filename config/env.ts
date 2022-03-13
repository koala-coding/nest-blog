import * as fs from 'fs';
import * as path from 'path';
// const dotenv = require('dotenv');
const isProd = process.env.NODE_ENV === 'production';

function parseEnv() {
  const localEnv = path.resolve('.env');
  const prodEnv = path.resolve('.env.prod');

  if (!fs.existsSync(localEnv) && !fs.existsSync(prodEnv)) {
    throw new Error('缺少环境配置文件');
  }

  const filePath = isProd && fs.existsSync(prodEnv) ? prodEnv : localEnv;

//   const config = dotenv.parse(fs.readFileSync(filePath));

  return { path:filePath };
}

export default parseEnv();
