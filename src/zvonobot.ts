import axios, { AxiosError } from 'axios';
import { ZvonobotUserInfo } from './types';

import env from './env';
import logger from './utils/logger';

class Zvonobot {
  private instance = axios.create({
    baseURL: 'https://lk.zvonobot.ru/apiCalls',
    timeout: 3000,
    headers: { 'Content-Type': 'application/json', accept: 'application/json' },
  });

  public getUserInfo = async () => {
    let userInfo: ZvonobotUserInfo;

    try {
      const response = await this.instance.post('/userInfo', {
        apiKey: env.ZVONOBOT_TOKEN,
      });

      const { data }: any = response.data;

      userInfo = {
        balance: data.balance,
        loggedAt: data.loggedAt,
        lastPayAt: data.lastPayAt,
      };

      return userInfo;
    } catch (e: any) {
      this.apiErrorHandler(e);
    }

    return null;
  };

  private apiErrorHandler = (error: AxiosError) => {
    if (error.response) {
      logger.error(JSON.stringify(error.response.data, null, 2));
      //logger.error(JSON.stringify(error.response.status, null, 2));
      //logger.error(JSON.stringify(error.response.headers, null, 2));
    } else if (error.request) {
      logger.error(JSON.stringify(error.request, null, 2));
    } else {
      logger.error(JSON.stringify(error.message, null, 2));
    }
    logger.error(JSON.stringify(error.config, null, 2));
  };
}

export default new Zvonobot();
