/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateOffer = /* GraphQL */ `subscription OnCreateOffer(
  $filter: ModelSubscriptionOfferFilterInput
  $owner: String
) {
  onCreateOffer(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOfferSubscriptionVariables,
  APITypes.OnCreateOfferSubscription
>;
export const onUpdateOffer = /* GraphQL */ `subscription OnUpdateOffer(
  $filter: ModelSubscriptionOfferFilterInput
  $owner: String
) {
  onUpdateOffer(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOfferSubscriptionVariables,
  APITypes.OnUpdateOfferSubscription
>;
export const onDeleteOffer = /* GraphQL */ `subscription OnDeleteOffer(
  $filter: ModelSubscriptionOfferFilterInput
  $owner: String
) {
  onDeleteOffer(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOfferSubscriptionVariables,
  APITypes.OnDeleteOfferSubscription
>;
export const onCreateItem = /* GraphQL */ `subscription OnCreateItem(
  $filter: ModelSubscriptionItemFilterInput
  $owner: String
) {
  onCreateItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem(
  $filter: ModelSubscriptionItemFilterInput
  $owner: String
) {
  onUpdateItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem(
  $filter: ModelSubscriptionItemFilterInput
  $owner: String
) {
  onDeleteItem(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
