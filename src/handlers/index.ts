import { Composer } from 'grammy';
import { GrammyContext } from '../types';

import panel from './panel';

const composer = new Composer<GrammyContext>();

composer.use(panel);

export default composer;
