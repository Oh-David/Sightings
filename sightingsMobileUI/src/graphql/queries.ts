/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listPublicItems = /* GraphQL */ `query ListPublicItems($limit: Int) {
  listPublicItems(limit: $limit) {
    items {
      id
      title
      description
      images
      isPublic
      price
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPublicItemsQueryVariables,
  APITypes.ListPublicItemsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    items {
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      username
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getOffer = /* GraphQL */ `query GetOffer($id: ID!) {
  getOffer(id: $id) {
    id
    itemID
    item {
      id
      title
      description
      images
      isPublic
      price
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    offeredByUserID
    offeredToUserID
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOfferQueryVariables, APITypes.GetOfferQuery>;
export const listOffers = /* GraphQL */ `query ListOffers(
  $filter: ModelOfferFilterInput
  $limit: Int
  $nextToken: String
) {
  listOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      itemID
      offeredByUserID
      offeredToUserID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOffersQueryVariables,
  APITypes.ListOffersQuery
>;
export const syncOffers = /* GraphQL */ `query SyncOffers(
  $filter: ModelOfferFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncOffers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      itemID
      offeredByUserID
      offeredToUserID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncOffersQueryVariables,
  APITypes.SyncOffersQuery
>;
export const offersByItemID = /* GraphQL */ `query OffersByItemID(
  $itemID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOfferFilterInput
  $limit: Int
  $nextToken: String
) {
  offersByItemID(
    itemID: $itemID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      itemID
      offeredByUserID
      offeredToUserID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OffersByItemIDQueryVariables,
  APITypes.OffersByItemIDQuery
>;
export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
    id
    title
    description
    images
    isPublic
    price
    userID
    user {
      id
      username
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    offers {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      images
      isPublic
      price
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
export const syncItems = /* GraphQL */ `query SyncItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      title
      description
      images
      isPublic
      price
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncItemsQueryVariables, APITypes.SyncItemsQuery>;
export const itemsByUserID = /* GraphQL */ `query ItemsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      images
      isPublic
      price
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemsByUserIDQueryVariables,
  APITypes.ItemsByUserIDQuery
>;
