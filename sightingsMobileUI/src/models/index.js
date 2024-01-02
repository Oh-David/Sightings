// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Item, Offer, ModelItemConnection } = initSchema(schema);

export {
  User,
  Item,
  Offer,
  ModelItemConnection
};