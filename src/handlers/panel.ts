import { Composer, InlineKeyboard } from 'grammy';
import { GrammyContext } from '../types';
import { toDateTime } from '../utils/datetime';
import Zvonobot from '../zvonobot';

const composer = new Composer<GrammyContext>();

composer.command('panel', async (ctx) => {
  const userInfo = await Zvonobot.getUserInfo();

  await ctx.reply(
    ctx.i18n.t('messages.panel', {
      balance: userInfo?.balance || '?',
      loggedAt: userInfo?.loggedAt ? toDateTime(userInfo.loggedAt) : '?',
      lastPayAt: userInfo?.lastPayAt ? toDateTime(userInfo.lastPayAt) : '?',
    }),
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: panelInlineKeyboard(ctx),
      },
    }
  );
});

const panelInlineKeyboard = (ctx: GrammyContext) =>
  new InlineKeyboard()
    .text(ctx.i18n.t('buttons.phones'), 'phones')
    .text(ctx.i18n.t('buttons.calling'), 'calling')
    .row()
    .text(ctx.i18n.t('buttons.stats'), 'stats')
    .row()
    .text(ctx.i18n.t('buttons.consultant'), 'consultant')
    .text(ctx.i18n.t('buttons.product'), 'product').inline_keyboard;

export default composer;
