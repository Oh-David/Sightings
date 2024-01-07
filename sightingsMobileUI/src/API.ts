/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOfferInput = {
  id?: string | null,
  itemID: string,
  offeredByUserID: string,
  offeredToUserID: string,
  status?: string | null,
};

export type ModelOfferConditionInput = {
  offeredByUserID?: ModelIDInput | null,
  offeredToUserID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelOfferConditionInput | null > | null,
  or?: Array< ModelOfferConditionInput | null > | null,
  not?: ModelOfferConditionInput | null,
};

export type ModelIDInput = {
  eq?: string | null,
  ne?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringInput = {
  eq?: string | null,
  ne?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type Offer = {
  __typename: "Offer",
  id: string,
  itemID: string,
  item?: Item | null,
  offeredByUserID: string,
  offeredToUserID: string,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  title: string,
  description?: string | null,
  images?: Array< string | null > | null,
  isPublic: string,
  price?: number | null,
  userID: string,
  user?: User | null,
  offers?: ModelOfferConnection | null,
  itemTradeOffers?: ModelItemTradeOfferConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email?: string | null,
  items?: ModelItemConnection | null,
  tradeOffers?: ModelTradeOfferConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items?:  Array<Item | null > | null,
};

export type ModelTradeOfferConnection = {
  __typename: "ModelTradeOfferConnection",
  items:  Array<TradeOffer | null >,
  nextToken?: string | null,
};

export type TradeOffer = {
  __typename: "TradeOffer",
  id: string,
  createdBy?: User | null,
  createdById: string,
  itemTradeOffers?: ModelItemTradeOfferConnection | null,
  offeredByUser?: User | null,
  offeredByUserId: string,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelItemTradeOfferConnection = {
  __typename: "ModelItemTradeOfferConnection",
  items:  Array<ItemTradeOffer | null >,
  nextToken?: string | null,
};

export type ItemTradeOffer = {
  __typename: "ItemTradeOffer",
  id: string,
  item?: Item | null,
  itemId: string,
  tradeOffer?: TradeOffer | null,
  tradeOfferId: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelOfferConnection = {
  __typename: "ModelOfferConnection",
  items:  Array<Offer | null >,
  nextToken?: string | null,
};

export type UpdateOfferInput = {
  id: string,
  itemID: string,
  offeredByUserID?: string | null,
  offeredToUserID?: string | null,
  status?: string | null,
};

export type DeleteOfferInput = {
  id: string,
  itemID: string,
};

export type CreateTradeOfferInput = {
  targetItemId: string,
  targetItemOwnerId: string,
  offeredItemIds: Array< string | null >,
  offeredByUserId: string,
};

export type ModelTradeOfferConditionInput = {
  createdById?: ModelIDInput | null,
  offeredByUserId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTradeOfferConditionInput | null > | null,
  or?: Array< ModelTradeOfferConditionInput | null > | null,
  not?: ModelTradeOfferConditionInput | null,
};

export type UpdateTradeOfferInput = {
  id: string,
  createdById?: string | null,
  offeredByUserId?: string | null,
  status?: string | null,
};

export type DeleteTradeOfferInput = {
  id: string,
};

export type CreateItemTradeOfferInput = {
  id?: string | null,
  itemId: string,
  tradeOfferId: string,
};

export type ModelItemTradeOfferConditionInput = {
  itemId?: ModelIDInput | null,
  tradeOfferId?: ModelIDInput | null,
  and?: Array< ModelItemTradeOfferConditionInput | null > | null,
  or?: Array< ModelItemTradeOfferConditionInput | null > | null,
  not?: ModelItemTradeOfferConditionInput | null,
};

export type UpdateItemTradeOfferInput = {
  id: string,
  itemId?: string | null,
  tradeOfferId?: string | null,
};

export type DeleteItemTradeOfferInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateItemInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  images?: Array< string | null > | null,
  isPublic: string,
  price?: number | null,
  userID: string,
};

export type ModelItemConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  isPublic?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type ModelFloatInput = {
  eq?: number | null,
  ne?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateItemInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  isPublic?: string | null,
  price?: number | null,
  userID?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type ModelTradeOfferFilterInput = {
  id?: ModelIDInput | null,
  createdById?: ModelIDInput | null,
  offeredByUserId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTradeOfferFilterInput | null > | null,
  or?: Array< ModelTradeOfferFilterInput | null > | null,
  not?: ModelTradeOfferFilterInput | null,
};

export type ModelItemTradeOfferFilterInput = {
  id?: ModelIDInput | null,
  itemId?: ModelIDInput | null,
  tradeOfferId?: ModelIDInput | null,
  and?: Array< ModelItemTradeOfferFilterInput | null > | null,
  or?: Array< ModelItemTradeOfferFilterInput | null > | null,
  not?: ModelItemTradeOfferFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  isPublic?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelOfferFilterInput = {
  id?: ModelIDInput | null,
  itemID?: ModelIDInput | null,
  offeredByUserID?: ModelIDInput | null,
  offeredToUserID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelOfferFilterInput | null > | null,
  or?: Array< ModelOfferFilterInput | null > | null,
  not?: ModelOfferFilterInput | null,
};

export type ModelSubscriptionTradeOfferFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdById?: ModelSubscriptionIDInput | null,
  offeredByUserId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTradeOfferFilterInput | null > | null,
  or?: Array< ModelSubscriptionTradeOfferFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionItemTradeOfferFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  itemId?: ModelSubscriptionIDInput | null,
  tradeOfferId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionItemTradeOfferFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemTradeOfferFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  isPublic?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionOfferFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  itemID?: ModelSubscriptionIDInput | null,
  offeredByUserID?: ModelSubscriptionIDInput | null,
  offeredToUserID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOfferFilterInput | null > | null,
  or?: Array< ModelSubscriptionOfferFilterInput | null > | null,
};

export type CreateOfferMutationVariables = {
  input: CreateOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type CreateOfferMutation = {
  createOffer?:  {
    __typename: "Offer",
    id: string,
    itemID: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOfferMutationVariables = {
  input: UpdateOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type UpdateOfferMutation = {
  updateOffer?:  {
    __typename: "Offer",
    id: string,
    itemID: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOfferMutationVariables = {
  input: DeleteOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type DeleteOfferMutation = {
  deleteOffer?:  {
    __typename: "Offer",
    id: string,
    itemID: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTradeOfferMutationVariables = {
  input: CreateTradeOfferInput,
  condition?: ModelTradeOfferConditionInput | null,
};

export type CreateTradeOfferMutation = {
  createTradeOffer?:  {
    __typename: "TradeOffer",
    id: string,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdById: string,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    offeredByUser?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserId: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTradeOfferMutationVariables = {
  input: UpdateTradeOfferInput,
  condition?: ModelTradeOfferConditionInput | null,
};

export type UpdateTradeOfferMutation = {
  updateTradeOffer?:  {
    __typename: "TradeOffer",
    id: string,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdById: string,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    offeredByUser?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserId: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTradeOfferMutationVariables = {
  input: DeleteTradeOfferInput,
  condition?: ModelTradeOfferConditionInput | null,
};

export type DeleteTradeOfferMutation = {
  deleteTradeOffer?:  {
    __typename: "TradeOffer",
    id: string,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdById: string,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    offeredByUser?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserId: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateItemTradeOfferMutationVariables = {
  input: CreateItemTradeOfferInput,
  condition?: ModelItemTradeOfferConditionInput | null,
};

export type CreateItemTradeOfferMutation = {
  createItemTradeOffer?:  {
    __typename: "ItemTradeOffer",
    id: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    itemId: string,
    tradeOffer?:  {
      __typename: "TradeOffer",
      id: string,
      createdById: string,
      offeredByUserId: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tradeOfferId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateItemTradeOfferMutationVariables = {
  input: UpdateItemTradeOfferInput,
  condition?: ModelItemTradeOfferConditionInput | null,
};

export type UpdateItemTradeOfferMutation = {
  updateItemTradeOffer?:  {
    __typename: "ItemTradeOffer",
    id: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    itemId: string,
    tradeOffer?:  {
      __typename: "TradeOffer",
      id: string,
      createdById: string,
      offeredByUserId: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tradeOfferId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteItemTradeOfferMutationVariables = {
  input: DeleteItemTradeOfferInput,
  condition?: ModelItemTradeOfferConditionInput | null,
};

export type DeleteItemTradeOfferMutation = {
  deleteItemTradeOffer?:  {
    __typename: "ItemTradeOffer",
    id: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    itemId: string,
    tradeOffer?:  {
      __typename: "TradeOffer",
      id: string,
      createdById: string,
      offeredByUserId: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tradeOfferId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
    } | null,
    tradeOffers?:  {
      __typename: "ModelTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
    } | null,
    tradeOffers?:  {
      __typename: "ModelTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
    } | null,
    tradeOffers?:  {
      __typename: "ModelTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    description?: string | null,
    images?: Array< string | null > | null,
    isPublic: string,
    price?: number | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
    } | null,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    description?: string | null,
    images?: Array< string | null > | null,
    isPublic: string,
    price?: number | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
    } | null,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    description?: string | null,
    images?: Array< string | null > | null,
    isPublic: string,
    price?: number | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
    } | null,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPublicItemsQueryVariables = {
  limit?: number | null,
};

export type ListPublicItemsQuery = {
  listPublicItems?:  {
    __typename: "ModelItemConnection",
    items?:  Array< {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
  } | null,
};

export type GetTradeOfferQueryVariables = {
  id: string,
};

export type GetTradeOfferQuery = {
  getTradeOffer?:  {
    __typename: "TradeOffer",
    id: string,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdById: string,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    offeredByUser?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserId: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTradeOffersQueryVariables = {
  filter?: ModelTradeOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTradeOffersQuery = {
  listTradeOffers?:  {
    __typename: "ModelTradeOfferConnection",
    items:  Array< {
      __typename: "TradeOffer",
      id: string,
      createdById: string,
      offeredByUserId: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetItemTradeOfferQueryVariables = {
  id: string,
};

export type GetItemTradeOfferQuery = {
  getItemTradeOffer?:  {
    __typename: "ItemTradeOffer",
    id: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    itemId: string,
    tradeOffer?:  {
      __typename: "TradeOffer",
      id: string,
      createdById: string,
      offeredByUserId: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tradeOfferId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListItemTradeOffersQueryVariables = {
  filter?: ModelItemTradeOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemTradeOffersQuery = {
  listItemTradeOffers?:  {
    __typename: "ModelItemTradeOfferConnection",
    items:  Array< {
      __typename: "ItemTradeOffer",
      id: string,
      itemId: string,
      tradeOfferId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ItemTradeOffersByItemIdQueryVariables = {
  itemId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemTradeOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemTradeOffersByItemIdQuery = {
  itemTradeOffersByItemId?:  {
    __typename: "ModelItemTradeOfferConnection",
    items:  Array< {
      __typename: "ItemTradeOffer",
      id: string,
      itemId: string,
      tradeOfferId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ItemTradeOffersByTradeOfferIdQueryVariables = {
  tradeOfferId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemTradeOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemTradeOffersByTradeOfferIdQuery = {
  itemTradeOffersByTradeOfferId?:  {
    __typename: "ModelItemTradeOfferConnection",
    items:  Array< {
      __typename: "ItemTradeOffer",
      id: string,
      itemId: string,
      tradeOfferId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
    } | null,
    tradeOffers?:  {
      __typename: "ModelTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    description?: string | null,
    images?: Array< string | null > | null,
    isPublic: string,
    price?: number | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
    } | null,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items?:  Array< {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
  } | null,
};

export type ItemsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByUserIDQuery = {
  itemsByUserID?:  {
    __typename: "ModelItemConnection",
    items?:  Array< {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
  } | null,
};

export type GetOfferQueryVariables = {
  id: string,
  itemID: string,
};

export type GetOfferQuery = {
  getOffer?:  {
    __typename: "Offer",
    id: string,
    itemID: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOffersQueryVariables = {
  id?: string | null,
  itemID?: ModelIDKeyConditionInput | null,
  filter?: ModelOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOffersQuery = {
  listOffers?:  {
    __typename: "ModelOfferConnection",
    items:  Array< {
      __typename: "Offer",
      id: string,
      itemID: string,
      offeredByUserID: string,
      offeredToUserID: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OffersByItemIDQueryVariables = {
  itemID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OffersByItemIDQuery = {
  offersByItemID?:  {
    __typename: "ModelOfferConnection",
    items:  Array< {
      __typename: "Offer",
      id: string,
      itemID: string,
      offeredByUserID: string,
      offeredToUserID: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTradeOfferSubscriptionVariables = {
  filter?: ModelSubscriptionTradeOfferFilterInput | null,
};

export type OnCreateTradeOfferSubscription = {
  onCreateTradeOffer?:  {
    __typename: "TradeOffer",
    id: string,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdById: string,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    offeredByUser?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserId: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTradeOfferSubscriptionVariables = {
  filter?: ModelSubscriptionTradeOfferFilterInput | null,
};

export type OnUpdateTradeOfferSubscription = {
  onUpdateTradeOffer?:  {
    __typename: "TradeOffer",
    id: string,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdById: string,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    offeredByUser?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserId: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTradeOfferSubscriptionVariables = {
  filter?: ModelSubscriptionTradeOfferFilterInput | null,
};

export type OnDeleteTradeOfferSubscription = {
  onDeleteTradeOffer?:  {
    __typename: "TradeOffer",
    id: string,
    createdBy?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdById: string,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    offeredByUser?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserId: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateItemTradeOfferSubscriptionVariables = {
  filter?: ModelSubscriptionItemTradeOfferFilterInput | null,
};

export type OnCreateItemTradeOfferSubscription = {
  onCreateItemTradeOffer?:  {
    __typename: "ItemTradeOffer",
    id: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    itemId: string,
    tradeOffer?:  {
      __typename: "TradeOffer",
      id: string,
      createdById: string,
      offeredByUserId: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tradeOfferId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateItemTradeOfferSubscriptionVariables = {
  filter?: ModelSubscriptionItemTradeOfferFilterInput | null,
};

export type OnUpdateItemTradeOfferSubscription = {
  onUpdateItemTradeOffer?:  {
    __typename: "ItemTradeOffer",
    id: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    itemId: string,
    tradeOffer?:  {
      __typename: "TradeOffer",
      id: string,
      createdById: string,
      offeredByUserId: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tradeOfferId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteItemTradeOfferSubscriptionVariables = {
  filter?: ModelSubscriptionItemTradeOfferFilterInput | null,
};

export type OnDeleteItemTradeOfferSubscription = {
  onDeleteItemTradeOffer?:  {
    __typename: "ItemTradeOffer",
    id: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    itemId: string,
    tradeOffer?:  {
      __typename: "TradeOffer",
      id: string,
      createdById: string,
      offeredByUserId: string,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tradeOfferId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
    } | null,
    tradeOffers?:  {
      __typename: "ModelTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
    } | null,
    tradeOffers?:  {
      __typename: "ModelTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
    } | null,
    tradeOffers?:  {
      __typename: "ModelTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    description?: string | null,
    images?: Array< string | null > | null,
    isPublic: string,
    price?: number | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
    } | null,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    description?: string | null,
    images?: Array< string | null > | null,
    isPublic: string,
    price?: number | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
    } | null,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  owner?: string | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    description?: string | null,
    images?: Array< string | null > | null,
    isPublic: string,
    price?: number | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
    } | null,
    itemTradeOffers?:  {
      __typename: "ModelItemTradeOfferConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateOfferSubscriptionVariables = {
  filter?: ModelSubscriptionOfferFilterInput | null,
  owner?: string | null,
};

export type OnCreateOfferSubscription = {
  onCreateOffer?:  {
    __typename: "Offer",
    id: string,
    itemID: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOfferSubscriptionVariables = {
  filter?: ModelSubscriptionOfferFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOfferSubscription = {
  onUpdateOffer?:  {
    __typename: "Offer",
    id: string,
    itemID: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOfferSubscriptionVariables = {
  filter?: ModelSubscriptionOfferFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOfferSubscription = {
  onDeleteOffer?:  {
    __typename: "Offer",
    id: string,
    itemID: string,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      description?: string | null,
      images?: Array< string | null > | null,
      isPublic: string,
      price?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
