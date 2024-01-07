/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createOffer = /* GraphQL */ `mutation CreateOffer(
  $input: CreateOfferInput!
  $condition: ModelOfferConditionInput
) {
  createOffer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOfferMutationVariables,
  APITypes.CreateOfferMutation
>;
export const updateOffer = /* GraphQL */ `mutation UpdateOffer(
  $input: UpdateOfferInput!
  $condition: ModelOfferConditionInput
) {
  updateOffer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOfferMutationVariables,
  APITypes.UpdateOfferMutation
>;
export const deleteOffer = /* GraphQL */ `mutation DeleteOffer(
  $input: DeleteOfferInput!
  $condition: ModelOfferConditionInput
) {
  deleteOffer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOfferMutationVariables,
  APITypes.DeleteOfferMutation
>;
export const createTradeOffer = /* GraphQL */ `mutation CreateTradeOffer(
  $input: CreateTradeOfferInput!
  $condition: ModelTradeOfferConditionInput
) {
  createTradeOffer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTradeOfferMutationVariables,
  APITypes.CreateTradeOfferMutation
>;
export const updateTradeOffer = /* GraphQL */ `mutation UpdateTradeOffer(
  $input: UpdateTradeOfferInput!
  $condition: ModelTradeOfferConditionInput
) {
  updateTradeOffer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTradeOfferMutationVariables,
  APITypes.UpdateTradeOfferMutation
>;
export const deleteTradeOffer = /* GraphQL */ `mutation DeleteTradeOffer(
  $input: DeleteTradeOfferInput!
  $condition: ModelTradeOfferConditionInput
) {
  deleteTradeOffer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTradeOfferMutationVariables,
  APITypes.DeleteTradeOfferMutation
>;
export const createItemTradeOffer = /* GraphQL */ `mutation CreateItemTradeOffer(
  $input: CreateItemTradeOfferInput!
  $condition: ModelItemTradeOfferConditionInput
) {
  createItemTradeOffer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateItemTradeOfferMutationVariables,
  APITypes.CreateItemTradeOfferMutation
>;
export const updateItemTradeOffer = /* GraphQL */ `mutation UpdateItemTradeOffer(
  $input: UpdateItemTradeOfferInput!
  $condition: ModelItemTradeOfferConditionInput
) {
  updateItemTradeOffer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateItemTradeOfferMutationVariables,
  APITypes.UpdateItemTradeOfferMutation
>;
export const deleteItemTradeOffer = /* GraphQL */ `mutation DeleteItemTradeOffer(
  $input: DeleteItemTradeOfferInput!
  $condition: ModelItemTradeOfferConditionInput
) {
  deleteItemTradeOffer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteItemTradeOfferMutationVariables,
  APITypes.DeleteItemTradeOfferMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createItem = /* GraphQL */ `mutation CreateItem(
  $input: CreateItemInput!
  $condition: ModelItemConditionInput
) {
  createItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $input: UpdateItemInput!
  $condition: ModelItemConditionInput
) {
  updateItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $input: DeleteItemInput!
  $condition: ModelItemConditionInput
) {
  deleteItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
