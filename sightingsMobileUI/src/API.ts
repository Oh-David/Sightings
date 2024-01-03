/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email?: string | null,
  items?: ModelItemConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items?:  Array<Item | null > | null,
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
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelOfferConnection = {
  __typename: "ModelOfferConnection",
  items:  Array<Offer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateItemInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  images?: Array< string | null > | null,
  isPublic: string,
  price?: number | null,
  userID: string,
  _version?: number | null,
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
  _deleted?: ModelBooleanInput | null,
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

export type UpdateItemInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  isPublic?: string | null,
  price?: number | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteItemInput = {
  id: string,
  _version?: number | null,
};

export type CreateOfferInput = {
  id?: string | null,
  itemID: string,
  offeredByUserID: string,
  offeredToUserID: string,
  status?: string | null,
  _version?: number | null,
};

export type ModelOfferConditionInput = {
  itemID?: ModelIDInput | null,
  offeredByUserID?: ModelIDInput | null,
  offeredToUserID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelOfferConditionInput | null > | null,
  or?: Array< ModelOfferConditionInput | null > | null,
  not?: ModelOfferConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateOfferInput = {
  id: string,
  itemID?: string | null,
  offeredByUserID?: string | null,
  offeredToUserID?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteOfferInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  isPublic?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  userID?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelSubscriptionOfferFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  itemID?: ModelSubscriptionIDInput | null,
  offeredByUserID?: ModelSubscriptionIDInput | null,
  offeredToUserID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOfferFilterInput | null > | null,
  or?: Array< ModelSubscriptionOfferFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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
  _deleted?: ModelBooleanInput | null,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null > | null,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOfferQueryVariables = {
  id: string,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListOffersQueryVariables = {
  filter?: ModelOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOffersQueryVariables = {
  filter?: ModelOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOffersQuery = {
  syncOffers?:  {
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null > | null,
  } | null,
};

export type SyncItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncItemsQuery = {
  syncItems?:  {
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null > | null,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offeredByUserID: string,
    offeredToUserID: string,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
