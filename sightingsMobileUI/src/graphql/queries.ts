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
export const getTradeOffer = /* GraphQL */ `query GetTradeOffer($id: ID!) {
  getTradeOffer(id: $id) {
    id
    createdBy {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    createdById
    itemTradeOffers {
      nextToken
      __typename
    }
    offeredByUser {
      id
      username
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    offeredByUserId
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTradeOfferQueryVariables,
  APITypes.GetTradeOfferQuery
>;
export const listTradeOffers = /* GraphQL */ `query ListTradeOffers(
  $filter: ModelTradeOfferFilterInput
  $limit: Int
  $nextToken: String
) {
  listTradeOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdById
      offeredByUserId
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTradeOffersQueryVariables,
  APITypes.ListTradeOffersQuery
>;
export const getItemTradeOffer = /* GraphQL */ `query GetItemTradeOffer($id: ID!) {
  getItemTradeOffer(id: $id) {
    id
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
      owner
      __typename
    }
    itemId
    tradeOffer {
      id
      createdById
      offeredByUserId
      status
      createdAt
      updatedAt
      __typename
    }
    tradeOfferId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetItemTradeOfferQueryVariables,
  APITypes.GetItemTradeOfferQuery
>;
export const listItemTradeOffers = /* GraphQL */ `query ListItemTradeOffers(
  $filter: ModelItemTradeOfferFilterInput
  $limit: Int
  $nextToken: String
) {
  listItemTradeOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      itemId
      tradeOfferId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListItemTradeOffersQueryVariables,
  APITypes.ListItemTradeOffersQuery
>;
export const itemTradeOffersByItemId = /* GraphQL */ `query ItemTradeOffersByItemId(
  $itemId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemTradeOfferFilterInput
  $limit: Int
  $nextToken: String
) {
  itemTradeOffersByItemId(
    itemId: $itemId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      itemId
      tradeOfferId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemTradeOffersByItemIdQueryVariables,
  APITypes.ItemTradeOffersByItemIdQuery
>;
export const itemTradeOffersByTradeOfferId = /* GraphQL */ `query ItemTradeOffersByTradeOfferId(
  $tradeOfferId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemTradeOfferFilterInput
  $limit: Int
  $nextToken: String
) {
  itemTradeOffersByTradeOfferId(
    tradeOfferId: $tradeOfferId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      itemId
      tradeOfferId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemTradeOffersByTradeOfferIdQueryVariables,
  APITypes.ItemTradeOffersByTradeOfferIdQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    items {
      __typename
    }
    tradeOffers {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
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
      owner
      __typename
    }
    offers {
      nextToken
      __typename
    }
    itemTradeOffers {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
      owner
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
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
export const getOffer = /* GraphQL */ `query GetOffer($id: ID!, $itemID: ID!) {
  getOffer(id: $id, itemID: $itemID) {
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
      owner
      __typename
    }
    offeredByUserID
    offeredToUserID
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOfferQueryVariables, APITypes.GetOfferQuery>;
export const listOffers = /* GraphQL */ `query ListOffers(
  $id: ID
  $itemID: ModelIDKeyConditionInput
  $filter: ModelOfferFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOffers(
    id: $id
    itemID: $itemID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      itemID
      offeredByUserID
      offeredToUserID
      status
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOffersQueryVariables,
  APITypes.ListOffersQuery
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
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OffersByItemIDQueryVariables,
  APITypes.OffersByItemIDQuery
>;
