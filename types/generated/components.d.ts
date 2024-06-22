import type { Schema, Attribute } from '@strapi/strapi';

export interface ListsSocialMedia extends Schema.Component {
  collectionName: 'components_lists_social_medias';
  info: {
    displayName: 'social-media';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'>;
  };
}

export interface ListsTextValues extends Schema.Component {
  collectionName: 'components_lists_text_values';
  info: {
    displayName: 'text-values';
    description: '';
  };
  attributes: {
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'lists.social-media': ListsSocialMedia;
      'lists.text-values': ListsTextValues;
    }
  }
}
