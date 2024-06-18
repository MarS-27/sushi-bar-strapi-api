import type { Schema, Attribute } from '@strapi/strapi';

export interface ListsIngredients extends Schema.Component {
  collectionName: 'components_lists_ingredients';
  info: {
    displayName: 'ingredients';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'lists.ingredients': ListsIngredients;
    }
  }
}
