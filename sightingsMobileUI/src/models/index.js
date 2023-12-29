// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Item, Offer } = initSchema(schema);

export {
  User,
  Item,
  Offer
};