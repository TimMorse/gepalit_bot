import { config } from 'dotenv';
import { cleanEnv, str } from 'envalid';

config();

export default cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production'] }),
  BOT_TOKEN: str(),
  ZVONOBOT_TOKEN: str(),
  DB_HOST: str(),
  DB_USER: str(),
  DB_PASS: str(),
  DB_NAME: str(),
});
