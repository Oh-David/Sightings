import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



type EagerModelItemConnection = {
  readonly items?: (Item | null)[] | null;
}

type LazyModelItemConnection = {
  readonly items: AsyncCollection<Item>;
}

export declare type ModelItemConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelItemConnection : LazyModelItemConnection

export declare const ModelItemConnection: (new (init: ModelInit<ModelItemConnection>) => ModelItemConnection)

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email?: string | null;
  readonly items?: (Item | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email?: string | null;
  readonly items: AsyncCollection<Item>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly images?: (string | null)[] | null;
  readonly isPublic: string;
  readonly price?: number | null;
  readonly userID: string;
  readonly user?: User | null;
  readonly offers?: (Offer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly images?: (string | null)[] | null;
  readonly isPublic: string;
  readonly price?: number | null;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly offers: AsyncCollection<Offer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerOffer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Offer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemID: string;
  readonly item?: Item | null;
  readonly offeredByUserID: string;
  readonly offeredToUserID: string;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOffer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Offer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemID: string;
  readonly item: AsyncItem<Item | undefined>;
  readonly offeredByUserID: string;
  readonly offeredToUserID: string;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Offer = LazyLoading extends LazyLoadingDisabled ? EagerOffer : LazyOffer

export declare const Offer: (new (init: ModelInit<Offer>) => Offer) & {
  copyOf(source: Offer, mutator: (draft: MutableModel<Offer>) => MutableModel<Offer> | void): Offer;
}