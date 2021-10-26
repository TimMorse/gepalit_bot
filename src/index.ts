import { Bot } from 'grammy';
import { I18n, pluralize } from '@grammyjs/i18n';
import { GrammyContext } from './types';

import { db } from './db';

import env from './env';
import locale from './locale';
import logger from './utils/logger';
import handlers from './handlers';

//#region Localization

const i18n = new I18n({
  defaultLanguage: 'ru',
  useSession: false,
  templateData: {
    pluralize,
  },
});

i18n.loadLocale('ru', locale);

//#endregion

//#region Bot initialization

const bot = new Bot<GrammyContext>(env.BOT_TOKEN);

bot.use(i18n.middleware());
bot.use(handlers);

//#endregion

//#region Handlers

bot.command('start', (ctx) => ctx.reply(ctx.i18n.t('hello')));

//#endregion

db.sync({ alter: true })
  .then((sequelize) => {
    logger.info(
      `Database connection '${sequelize.config.database}' established`
    );

    bot.start({
      drop_pending_updates: true,
      onStart: (botInfo) => logger.info(`${botInfo.username} started`),
    });
  })
  .catch((reason) => {
    logger.error(reason);
  });

bot.catch((errorHandler) => logger.error(errorHandler));
