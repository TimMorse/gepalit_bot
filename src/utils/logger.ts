import { createLogger, format, transports } from 'winston';
import env from '../env';

const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp({ format: 'HH:mm:ss' }), colorize(), myFormat),
  transports: [
    new transports.Console({ level: env.isProduction ? 'info' : 'debug' }),
    new transports.File({ filename: `${__dirname}../../../logs/combine.log` }),
  ],
});

if (env.isDevelopment) {
  logger.debug('Logging initialized at debug level');
}

export default logger;
