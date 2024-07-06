import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerRelationsDelivery extends Schema.Component {
  collectionName: 'components_banner_relations_deliveries';
  info: {
    displayName: 'delivery';
  };
  attributes: {
    delivery_payment: Attribute.Relation<
      'banner-relations.delivery',
      'oneToOne',
      'api::delivery-payment.delivery-payment'
    >;
  };
}

export interface BannerRelationsProduct extends Schema.Component {
  collectionName: 'components_banner_relations_products';
  info: {
    displayName: 'product';
  };
  attributes: {
    product: Attribute.Relation<
      'banner-relations.product',
      'oneToOne',
      'api::product.product'
    >;
  };
}

export interface BannerRelationsPromotion extends Schema.Component {
  collectionName: 'components_banner_relations_promotions';
  info: {
    displayName: 'promotion';
  };
  attributes: {
    promotion: Attribute.Relation<
      'banner-relations.promotion',
      'oneToOne',
      'api::promotion.promotion'
    >;
  };
}

export interface ListsOrderedProduct extends Schema.Component {
  collectionName: 'components_lists_ordered_products';
  info: {
    displayName: 'ordered-product';
    description: '';
  };
  attributes: {
    quantity: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    product: Attribute.Relation<
      'lists.ordered-product',
      'oneToOne',
      'api::product.product'
    >;
  };
}

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
    value: Attribute.Text & Attribute.Required;
  };
}

export interface ObjectsDeliveryAddress extends Schema.Component {
  collectionName: 'components_objects_delivery_addresses';
  info: {
    displayName: 'delivery-address';
  };
  attributes: {
    city: Attribute.String & Attribute.Required;
    street: Attribute.String & Attribute.Required;
    house: Attribute.String & Attribute.Required;
    entrance: Attribute.String;
    apartment: Attribute.String;
    floor: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner-relations.delivery': BannerRelationsDelivery;
      'banner-relations.product': BannerRelationsProduct;
      'banner-relations.promotion': BannerRelationsPromotion;
      'lists.ordered-product': ListsOrderedProduct;
      'lists.social-media': ListsSocialMedia;
      'lists.text-values': ListsTextValues;
      'objects.delivery-address': ObjectsDeliveryAddress;
    }
  }
}
