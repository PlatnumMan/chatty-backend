import mongoose from 'mongoose';
import Logger from 'bunyan';
import { config } from '@root/config';
import { redisConnection } from '@service/redis/redis.connection';
import { Helpers } from '@global/helpers/helpers';

const log: Logger = config.createLogger('setupDatabase');

export default () => {
  const connect = () => {
    mongoose.set('strictQuery', false);
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        Helpers.log.info('Successfully connected to MongoDB.');
        redisConnection.connect();
      })
      .catch((err) => {
        log.error('Error connecting to MongoDB: ', err.message);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
