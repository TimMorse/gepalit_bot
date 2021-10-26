import { Context } from 'grammy';
import { I18nContext } from '@grammyjs/i18n';
import { Optional } from 'sequelize/types';

//#region Bot Interfaces

export interface GrammyContext extends Context {
  readonly i18n: I18nContext;
}

//#endregion

//#region DB Interfaces

export interface PhonesAttributes {
  id: number;
  phone: string;
  status: number;
}

export type PhonesCreationAttributes = Optional<PhonesAttributes, 'id'>;

//#endregion

//#region Zvonobot Interfaces

export interface ZvonobotUserInfo {
  balance: string;
  loggedAt: number;
  lastPayAt: number;
}

//#endregion
