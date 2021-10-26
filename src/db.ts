import { Sequelize, DataTypes, Model } from 'sequelize';
import { PhonesAttributes, PhonesCreationAttributes } from './types';

import env from './env';

const db = new Sequelize({
  dialect: 'postgres',
  host: env.DB_HOST,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  logging: false,
});

class Phones
  extends Model<PhonesAttributes, PhonesCreationAttributes>
  implements PhonesAttributes
{
  public id!: number;
  public phone!: string;
  public status!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const tbPhones = Phones.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'phones',
    sequelize: db,
  }
);

export { db, tbPhones };
