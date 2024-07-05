/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  data?: object | object[] | null;
  error: {
    status?: number;
    name?: string;
    message?: string;
    details?: object;
  };
}

export interface AboutLocalizationRequest {
  paragraph: ListsTextValuesComponent[];
  locale: string;
}

export interface AboutRequest {
  data: {
    paragraph: ListsTextValuesComponent[];
    locale?: string;
  };
}

export interface AboutResponseDataObjectLocalized {
  id?: number;
  attributes?: About;
}

export interface AboutLocalizationResponse {
  data?: AboutResponseDataObjectLocalized;
  meta?: object;
}

export interface AboutListResponseDataItemLocalized {
  id?: number;
  attributes?: About;
}

export interface AboutLocalizationListResponse {
  data?: AboutListResponseDataItemLocalized[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface AboutListResponseDataItem {
  id?: number;
  attributes?: About;
}

export interface AboutListResponse {
  data?: AboutListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface About {
  paragraph: ListsTextValuesComponent[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: {
        firstname?: string;
        lastname?: string;
        username?: string;
        /** @format email */
        email?: string;
        resetPasswordToken?: string;
        registrationToken?: string;
        isActive?: boolean;
        roles?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              code?: string;
              description?: string;
              users?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              permissions?: {
                data?: {
                  id?: number;
                  attributes?: {
                    action?: string;
                    actionParameters?: any;
                    subject?: string;
                    properties?: any;
                    conditions?: any;
                    role?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          }[];
        };
        blocked?: boolean;
        preferedLanguage?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: AboutListResponseDataItemLocalized[];
  };
  locale?: string;
}

export interface AboutResponseDataObject {
  id?: number;
  attributes?: About;
}

export interface AboutResponse {
  data?: AboutResponseDataObject;
  meta?: object;
}

export interface ListsTextValuesComponent {
  id?: number;
  value?: string;
}

export interface BannerLocalizationRequest {
  /** @example "string or id" */
  img: number | string;
  relation_route: BannerLocalizationRequestRelationRouteEnum;
  relation: (BannerRelationsProductComponent | BannerRelationsPromotionComponent | BannerRelationsDeliveryComponent)[];
  locale: string;
}

export interface BannerRequest {
  data: {
    /** @example "string or id" */
    img: number | string;
    relation_route: BannerRequestRelationRouteEnum;
    relation: (
      | BannerRelationsProductComponent
      | BannerRelationsPromotionComponent
      | BannerRelationsDeliveryComponent
    )[];
    locale?: string;
  };
}

export interface BannerResponseDataObjectLocalized {
  id?: number;
  attributes?: Banner;
}

export interface BannerLocalizationResponse {
  data?: BannerResponseDataObjectLocalized;
  meta?: object;
}

export interface BannerListResponseDataItemLocalized {
  id?: number;
  attributes?: Banner;
}

export interface BannerLocalizationListResponse {
  data?: BannerListResponseDataItemLocalized[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface BannerListResponseDataItem {
  id?: number;
  attributes?: Banner;
}

export interface BannerListResponse {
  data?: BannerListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Banner {
  img: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  relation_route: BannerRelationRouteEnum;
  relation: (BannerRelationsProductComponent | BannerRelationsPromotionComponent | BannerRelationsDeliveryComponent)[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: BannerListResponseDataItemLocalized[];
  };
  locale?: string;
}

export interface BannerResponseDataObject {
  id?: number;
  attributes?: Banner;
}

export interface BannerResponse {
  data?: BannerResponseDataObject;
  meta?: object;
}

export interface BannerRelationsProductComponent {
  id?: number;
  __component?: string;
  product?: {
    data?: {
      id?: number;
      attributes?: {
        title?: string;
        isNew?: boolean;
        isVegan?: boolean;
        price?: number;
        img?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              folder?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        isSpicy?: boolean;
        quantity?: number;
        category?: {
          data?: {
            id?: number;
            attributes?: {
              titile?: string;
              icon?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                };
              };
              products?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              localizations?: {
                data?: any[];
              };
              locale?: string;
            };
          };
        };
        ingredients?: {
          id?: number;
          value?: string;
        }[];
        weight?: number;
        isHot?: boolean;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        localizations?: {
          data?: any[];
        };
        locale?: string;
      };
    };
  };
}

export interface BannerRelationsPromotionComponent {
  id?: number;
  __component?: string;
  promotion?: {
    data?: {
      id?: number;
      attributes?: {
        title?: string;
        subtitle?: string;
        description?: string;
        img?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              folder?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        localizations?: {
          data?: any[];
        };
        locale?: string;
      };
    };
  };
}

export interface BannerRelationsDeliveryComponent {
  id?: number;
  __component?: string;
  delivery_payment?: {
    data?: {
      id?: number;
      attributes?: {
        type?: BannerRelationsDeliveryComponentTypeEnum;
        title?: string;
        description?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        localizations?: {
          data?: any[];
        };
        locale?: string;
      };
    };
  };
}

export interface CategoryLocalizationRequest {
  titile: string;
  /** @example "string or id" */
  icon: number | string;
  products?: (number | string)[];
  locale: string;
}

export interface CategoryRequest {
  data: {
    titile: string;
    /** @example "string or id" */
    icon: number | string;
    products?: (number | string)[];
    locale?: string;
  };
}

export interface CategoryResponseDataObjectLocalized {
  id?: number;
  attributes?: Category;
}

export interface CategoryLocalizationResponse {
  data?: CategoryResponseDataObjectLocalized;
  meta?: object;
}

export interface CategoryListResponseDataItemLocalized {
  id?: number;
  attributes?: Category;
}

export interface CategoryLocalizationListResponse {
  data?: CategoryListResponseDataItemLocalized[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface CategoryListResponseDataItem {
  id?: number;
  attributes?: Category;
}

export interface CategoryListResponse {
  data?: CategoryListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Category {
  titile: string;
  icon: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  products?: {
    data?: {
      id?: number;
      attributes?: {
        title?: string;
        isNew?: boolean;
        isVegan?: boolean;
        price?: number;
        img?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              folder?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        isSpicy?: boolean;
        quantity?: number;
        category?: {
          data?: {
            id?: number;
            attributes?: {
              titile?: string;
              icon?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                };
              };
              products?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              localizations?: {
                data?: any[];
              };
              locale?: string;
            };
          };
        };
        ingredients?: {
          id?: number;
          value?: string;
        }[];
        weight?: number;
        isHot?: boolean;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        localizations?: {
          data?: any[];
        };
        locale?: string;
      };
    }[];
  };
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: CategoryListResponseDataItemLocalized[];
  };
  locale?: string;
}

export interface CategoryResponseDataObject {
  id?: number;
  attributes?: Category;
}

export interface CategoryResponse {
  data?: CategoryResponseDataObject;
  meta?: object;
}

export interface ContactLocalizationRequest {
  work_mode: string;
  social_media?: ListsSocialMediaComponent[];
  addresses: ListsTextValuesComponent[];
  phone_numbers: ListsTextValuesComponent[];
  locale: string;
}

export interface ContactRequest {
  data: {
    work_mode: string;
    social_media?: ListsSocialMediaComponent[];
    addresses: ListsTextValuesComponent[];
    phone_numbers: ListsTextValuesComponent[];
    locale?: string;
  };
}

export interface ContactResponseDataObjectLocalized {
  id?: number;
  attributes?: Contact;
}

export interface ContactLocalizationResponse {
  data?: ContactResponseDataObjectLocalized;
  meta?: object;
}

export interface ContactListResponseDataItemLocalized {
  id?: number;
  attributes?: Contact;
}

export interface ContactLocalizationListResponse {
  data?: ContactListResponseDataItemLocalized[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface ContactListResponseDataItem {
  id?: number;
  attributes?: Contact;
}

export interface ContactListResponse {
  data?: ContactListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Contact {
  work_mode: string;
  social_media?: ListsSocialMediaComponent[];
  addresses: ListsTextValuesComponent[];
  phone_numbers: ListsTextValuesComponent[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: ContactListResponseDataItemLocalized[];
  };
  locale?: string;
}

export interface ContactResponseDataObject {
  id?: number;
  attributes?: Contact;
}

export interface ContactResponse {
  data?: ContactResponseDataObject;
  meta?: object;
}

export interface ListsSocialMediaComponent {
  id?: number;
  title?: string;
  link?: string;
  icon?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
}

export interface DeliveryPaymentLocalizationRequest {
  type: DeliveryPaymentLocalizationRequestTypeEnum;
  title: string;
  description: string;
  locale: string;
}

export interface DeliveryPaymentRequest {
  data: {
    type: DeliveryPaymentRequestTypeEnum;
    title: string;
    description: string;
    locale?: string;
  };
}

export interface DeliveryPaymentResponseDataObjectLocalized {
  id?: number;
  attributes?: DeliveryPayment;
}

export interface DeliveryPaymentLocalizationResponse {
  data?: DeliveryPaymentResponseDataObjectLocalized;
  meta?: object;
}

export interface DeliveryPaymentListResponseDataItemLocalized {
  id?: number;
  attributes?: DeliveryPayment;
}

export interface DeliveryPaymentLocalizationListResponse {
  data?: DeliveryPaymentListResponseDataItemLocalized[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface DeliveryPaymentListResponseDataItem {
  id?: number;
  attributes?: DeliveryPayment;
}

export interface DeliveryPaymentListResponse {
  data?: DeliveryPaymentListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface DeliveryPayment {
  type: DeliveryPaymentTypeEnum;
  title: string;
  description: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: {
        firstname?: string;
        lastname?: string;
        username?: string;
        /** @format email */
        email?: string;
        resetPasswordToken?: string;
        registrationToken?: string;
        isActive?: boolean;
        roles?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              code?: string;
              description?: string;
              users?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              permissions?: {
                data?: {
                  id?: number;
                  attributes?: {
                    action?: string;
                    actionParameters?: any;
                    subject?: string;
                    properties?: any;
                    conditions?: any;
                    role?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          }[];
        };
        blocked?: boolean;
        preferedLanguage?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: DeliveryPaymentListResponseDataItemLocalized[];
  };
  locale?: string;
}

export interface DeliveryPaymentResponseDataObject {
  id?: number;
  attributes?: DeliveryPayment;
}

export interface DeliveryPaymentResponse {
  data?: DeliveryPaymentResponseDataObject;
  meta?: object;
}

export interface OrderRequest {
  data: {
    people_number?: number;
    customer_name: string;
    customer_phone: string;
    delivery_type: OrderRequestDeliveryTypeEnum;
    ordered_products: ListsOrderedProductComponent[];
    delivery_address: ObjectsDeliveryAddressComponent;
    payment_method: OrderRequestPaymentMethodEnum;
    total_weight: number;
    total_price: number;
  };
}

export interface OrderListResponseDataItem {
  id?: number;
  attributes?: Order;
}

export interface OrderListResponse {
  data?: OrderListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Order {
  people_number?: number;
  customer_name: string;
  customer_phone: string;
  delivery_type: OrderDeliveryTypeEnum;
  ordered_products: ListsOrderedProductComponent[];
  delivery_address: ObjectsDeliveryAddressComponent;
  payment_method: OrderPaymentMethodEnum;
  total_weight: number;
  total_price: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
}

export interface OrderResponseDataObject {
  id?: number;
  attributes?: Order;
}

export interface OrderResponse {
  data?: OrderResponseDataObject;
  meta?: object;
}

export interface ListsOrderedProductComponent {
  id?: number;
  quantity?: number;
  product?: {
    data?: {
      id?: number;
      attributes?: {
        title?: string;
        isNew?: boolean;
        isVegan?: boolean;
        price?: number;
        img?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              folder?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    pathId?: number;
                    parent?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    children?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    files?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          /** @format float */
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            }[];
                          };
                          folder?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          folderPath?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                /** @format email */
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        }[];
                                      };
                                      permissions?: {
                                        data?: {
                                          id?: number;
                                          attributes?: {
                                            action?: string;
                                            actionParameters?: any;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: {
                                              data?: {
                                                id?: number;
                                                attributes?: object;
                                              };
                                            };
                                            /** @format date-time */
                                            createdAt?: string;
                                            /** @format date-time */
                                            updatedAt?: string;
                                            createdBy?: {
                                              data?: {
                                                id?: number;
                                                attributes?: object;
                                              };
                                            };
                                            updatedBy?: {
                                              data?: {
                                                id?: number;
                                                attributes?: object;
                                              };
                                            };
                                          };
                                        }[];
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      }[];
                    };
                    path?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                };
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        isSpicy?: boolean;
        quantity?: number;
        category?: {
          data?: {
            id?: number;
            attributes?: {
              titile?: string;
              icon?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                };
              };
              products?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              localizations?: {
                data?: any[];
              };
              locale?: string;
            };
          };
        };
        ingredients?: {
          id?: number;
          value?: string;
        }[];
        weight?: number;
        isHot?: boolean;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        localizations?: {
          data?: any[];
        };
        locale?: string;
      };
    };
  };
}

export interface ObjectsDeliveryAddressComponent {
  id?: number;
  city?: string;
  street?: string;
  house?: string;
  entrance?: string;
  apartment?: string;
  floor?: string;
}

export interface ProductLocalizationRequest {
  title: string;
  isNew?: boolean;
  isVegan?: boolean;
  price: number;
  /** @example "string or id" */
  img?: number | string;
  isSpicy?: boolean;
  quantity: number;
  /** @example "string or id" */
  category?: number | string;
  ingredients: ListsTextValuesComponent[];
  weight: number;
  isHot?: boolean;
  locale: string;
}

export interface ProductRequest {
  data: {
    title: string;
    isNew?: boolean;
    isVegan?: boolean;
    price: number;
    /** @example "string or id" */
    img?: number | string;
    isSpicy?: boolean;
    quantity: number;
    /** @example "string or id" */
    category?: number | string;
    ingredients: ListsTextValuesComponent[];
    weight: number;
    isHot?: boolean;
    locale?: string;
  };
}

export interface ProductResponseDataObjectLocalized {
  id?: number;
  attributes?: Product;
}

export interface ProductLocalizationResponse {
  data?: ProductResponseDataObjectLocalized;
  meta?: object;
}

export interface ProductListResponseDataItemLocalized {
  id?: number;
  attributes?: Product;
}

export interface ProductLocalizationListResponse {
  data?: ProductListResponseDataItemLocalized[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface ProductListResponseDataItem {
  id?: number;
  attributes?: Product;
}

export interface ProductListResponse {
  data?: ProductListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Product {
  title: string;
  isNew?: boolean;
  isVegan?: boolean;
  price: number;
  img?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  isSpicy?: boolean;
  quantity: number;
  category?: {
    data?: {
      id?: number;
      attributes?: {
        titile?: string;
        icon?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              /** @format float */
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              folder?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              folderPath?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        products?: {
          data?: {
            id?: number;
            attributes?: {
              title?: string;
              isNew?: boolean;
              isVegan?: boolean;
              price?: number;
              img?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                };
              };
              isSpicy?: boolean;
              quantity?: number;
              category?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              ingredients?: {
                id?: number;
                value?: string;
              }[];
              weight?: number;
              isHot?: boolean;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              /** @format date-time */
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              localizations?: {
                data?: any[];
              };
              locale?: string;
            };
          }[];
        };
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        /** @format date-time */
        publishedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        localizations?: {
          data?: any[];
        };
        locale?: string;
      };
    };
  };
  ingredients: ListsTextValuesComponent[];
  weight: number;
  isHot?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: ProductListResponseDataItemLocalized[];
  };
  locale?: string;
}

export interface ProductResponseDataObject {
  id?: number;
  attributes?: Product;
}

export interface ProductResponse {
  data?: ProductResponseDataObject;
  meta?: object;
}

export interface PromotionLocalizationRequest {
  title: string;
  subtitle?: string;
  description?: string;
  /** @example "string or id" */
  img?: number | string;
  locale: string;
}

export interface PromotionRequest {
  data: {
    title: string;
    subtitle?: string;
    description?: string;
    /** @example "string or id" */
    img?: number | string;
    locale?: string;
  };
}

export interface PromotionResponseDataObjectLocalized {
  id?: number;
  attributes?: Promotion;
}

export interface PromotionLocalizationResponse {
  data?: PromotionResponseDataObjectLocalized;
  meta?: object;
}

export interface PromotionListResponseDataItemLocalized {
  id?: number;
  attributes?: Promotion;
}

export interface PromotionLocalizationListResponse {
  data?: PromotionListResponseDataItemLocalized[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface PromotionListResponseDataItem {
  id?: number;
  attributes?: Promotion;
}

export interface PromotionListResponse {
  data?: PromotionListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Promotion {
  title: string;
  subtitle?: string;
  description?: string;
  img?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: PromotionListResponseDataItemLocalized[];
  };
  locale?: string;
}

export interface PromotionResponseDataObject {
  id?: number;
  attributes?: Promotion;
}

export interface PromotionResponse {
  data?: PromotionResponseDataObject;
  meta?: object;
}

export interface UploadFile {
  id?: number;
  name?: string;
  alternativeText?: string;
  caption?: string;
  /** @format integer */
  width?: number;
  /** @format integer */
  height?: number;
  formats?: number;
  hash?: string;
  ext?: string;
  mime?: string;
  /** @format double */
  size?: number;
  url?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: object;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsRole {
  id?: number;
  name?: string;
  description?: string;
  type?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsUser {
  /** @example 1 */
  id?: number;
  /** @example "foo.bar" */
  username?: string;
  /** @example "foo.bar@strapi.io" */
  email?: string;
  /** @example "local" */
  provider?: string;
  /** @example true */
  confirmed?: boolean;
  /** @example false */
  blocked?: boolean;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.258Z"
   */
  createdAt?: string;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.267Z"
   */
  updatedAt?: string;
}

export interface UsersPermissionsUserRegistration {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
  jwt?: string;
  user?: UsersPermissionsUser;
}

export type UsersPermissionsPermissionsTree = Record<
  string,
  {
    /** every controller of the api */
    controllers?: Record<
      string,
      Record<
        string,
        {
          enabled?: boolean;
          policy?: string;
        }
      >
    >;
  }
>;

export type BannerLocalizationRequestRelationRouteEnum = "products" | "promotions" | "delivery-payments";

export type BannerRequestRelationRouteEnum = "products" | "promotions" | "delivery-payments";

export type BannerRelationRouteEnum = "products" | "promotions" | "delivery-payments";

export type BannerRelationsDeliveryComponentTypeEnum = "Delivery" | "Payment";

export type DeliveryPaymentLocalizationRequestTypeEnum = "Delivery" | "Payment";

export type DeliveryPaymentRequestTypeEnum = "Delivery" | "Payment";

export type DeliveryPaymentTypeEnum = "Delivery" | "Payment";

export type OrderRequestDeliveryTypeEnum = "SelfPickup" | "ToAddress";

export type OrderRequestPaymentMethodEnum = "Card" | "Cash";

export type OrderDeliveryTypeEnum = "SelfPickup" | "ToAddress";

export type OrderPaymentMethodEnum = "Card" | "Cash";

export interface GetAboutsParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** Page number (default: 0) */
  "pagination[page]"?: number;
  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** Offset value (default: 0) */
  "pagination[start]"?: number;
  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
}

export type GetAboutsData = AboutListResponse;

export type PostAboutsData = AboutResponse;

export type GetAboutsIdData = AboutResponse;

export type PutAboutsIdData = AboutResponse;

/** @format int64 */
export type DeleteAboutsIdData = number;

export type PostAboutsIdLocalizationsData = AboutLocalizationResponse;

export interface GetBannersParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** Page number (default: 0) */
  "pagination[page]"?: number;
  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** Offset value (default: 0) */
  "pagination[start]"?: number;
  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
}

export type GetBannersData = BannerListResponse;

export type PostBannersData = BannerResponse;

export type GetBannersIdData = BannerResponse;

export type PutBannersIdData = BannerResponse;

/** @format int64 */
export type DeleteBannersIdData = number;

export type PostBannersIdLocalizationsData = BannerLocalizationResponse;

export interface GetCategoriesParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** Page number (default: 0) */
  "pagination[page]"?: number;
  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** Offset value (default: 0) */
  "pagination[start]"?: number;
  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
}

export type GetCategoriesData = CategoryListResponse;

export type PostCategoriesData = CategoryResponse;

export type GetCategoriesIdData = CategoryResponse;

export type PutCategoriesIdData = CategoryResponse;

/** @format int64 */
export type DeleteCategoriesIdData = number;

export type PostCategoriesIdLocalizationsData = CategoryLocalizationResponse;

export interface GetContactsParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** Page number (default: 0) */
  "pagination[page]"?: number;
  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** Offset value (default: 0) */
  "pagination[start]"?: number;
  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
}

export type GetContactsData = ContactListResponse;

export type PostContactsData = ContactResponse;

export type GetContactsIdData = ContactResponse;

export type PutContactsIdData = ContactResponse;

/** @format int64 */
export type DeleteContactsIdData = number;

export type PostContactsIdLocalizationsData = ContactLocalizationResponse;

export interface GetDeliveryPaymentsParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** Page number (default: 0) */
  "pagination[page]"?: number;
  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** Offset value (default: 0) */
  "pagination[start]"?: number;
  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
}

export type GetDeliveryPaymentsData = DeliveryPaymentListResponse;

export type PostDeliveryPaymentsData = DeliveryPaymentResponse;

export type GetDeliveryPaymentsIdData = DeliveryPaymentResponse;

export type PutDeliveryPaymentsIdData = DeliveryPaymentResponse;

/** @format int64 */
export type DeleteDeliveryPaymentsIdData = number;

export type PostDeliveryPaymentsIdLocalizationsData = DeliveryPaymentLocalizationResponse;

export interface GetOrdersParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** Page number (default: 0) */
  "pagination[page]"?: number;
  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** Offset value (default: 0) */
  "pagination[start]"?: number;
  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
}

export type GetOrdersData = OrderListResponse;

export type PostOrdersData = OrderResponse;

export type GetOrdersIdData = OrderResponse;

export type PutOrdersIdData = OrderResponse;

/** @format int64 */
export type DeleteOrdersIdData = number;

export interface GetProductsParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** Page number (default: 0) */
  "pagination[page]"?: number;
  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** Offset value (default: 0) */
  "pagination[start]"?: number;
  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
}

export type GetProductsData = ProductListResponse;

export type PostProductsData = ProductResponse;

export type GetProductsIdData = ProductResponse;

export type PutProductsIdData = ProductResponse;

/** @format int64 */
export type DeleteProductsIdData = number;

export type PostProductsIdLocalizationsData = ProductLocalizationResponse;

export interface GetPromotionsParams {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  /** Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** Page number (default: 0) */
  "pagination[page]"?: number;
  /** Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** Offset value (default: 0) */
  "pagination[start]"?: number;
  /** Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
}

export type GetPromotionsData = PromotionListResponse;

export type PostPromotionsData = PromotionResponse;

export type GetPromotionsIdData = PromotionResponse;

export type PutPromotionsIdData = PromotionResponse;

/** @format int64 */
export type DeletePromotionsIdData = number;

export type PostPromotionsIdLocalizationsData = PromotionLocalizationResponse;

export interface UploadCreatePayload {
  /** The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). */
  path?: string;
  /** The ID of the entry which the file(s) will be linked to */
  refId?: string;
  /** The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). */
  ref?: string;
  /** The field of the entry which the file(s) will be precisely linked to. */
  field?: string;
  files: File[];
}

export type UploadCreateData = UploadFile[];

export interface UploadIdCreatePayload {
  fileInfo?: {
    name?: string;
    alternativeText?: string;
    caption?: string;
  };
  /** @format binary */
  files?: File;
}

export interface UploadIdCreateParams {
  id: string;
}

export type UploadIdCreateData = UploadFile[];

export type FilesListData = UploadFile[];

export type FilesDetailData = UploadFile;

export type FilesDeleteData = UploadFile;

export interface LocalCreatePayload {
  identifier?: string;
  password?: string;
}

export type LocalCreateData = UsersPermissionsUserRegistration;

export interface LocalRegisterCreatePayload {
  username?: string;
  email?: string;
  password?: string;
}

export type LocalRegisterCreateData = UsersPermissionsUserRegistration;

export type CallbackDetailData = UsersPermissionsUserRegistration;

export type OkEnum = "true";

export interface ForgotPasswordCreatePayload {
  email?: string;
}

export interface ForgotPasswordCreateData {
  ok?: OkEnum;
}

export interface ResetPasswordCreatePayload {
  password?: string;
  passwordConfirmation?: string;
  code?: string;
}

export type ResetPasswordCreateData = UsersPermissionsUserRegistration;

export interface ChangePasswordCreatePayload {
  password: string;
  currentPassword: string;
  passwordConfirmation: string;
}

export type ChangePasswordCreateData = UsersPermissionsUserRegistration;

export interface EmailConfirmationListParams {
  /** confirmation token received by email */
  confirmation?: string;
}

export type SentEnum = "true";

export interface SendEmailConfirmationCreatePayload {
  email?: string;
}

export interface SendEmailConfirmationCreateData {
  email?: string;
  sent?: SentEnum;
}

export interface PermissionsListData {
  permissions?: UsersPermissionsPermissionsTree;
}

export interface RolesListData {
  roles?: (UsersPermissionsRole & {
    nb_users?: number;
  })[];
}

export type OkEnum1 = "true";

export interface RolesCreateData {
  ok?: OkEnum1;
}

export interface RolesDetailData {
  role?: UsersPermissionsRole;
}

export type OkEnum2 = "true";

export interface RolesUpdateData {
  ok?: OkEnum2;
}

export type OkEnum3 = "true";

export interface RolesDeleteData {
  ok?: OkEnum3;
}

export type UsersListData = UsersPermissionsUser[];

export interface UsersCreatePayload {
  email: string;
  username: string;
  password: string;
}

export type UsersCreateData = UsersPermissionsUser & {
  role?: UsersPermissionsRole;
};

export type UsersDetailData = UsersPermissionsUser;

export interface UsersUpdatePayload {
  email: string;
  username: string;
  password: string;
}

export type UsersUpdateData = UsersPermissionsUser & {
  role?: UsersPermissionsRole;
};

export type UsersDeleteData = UsersPermissionsUser;

export type GetUsersPermissionsUsersRolesData = UsersPermissionsUser;

export type CountListData = number;

export namespace About {
  /**
   * No description
   * @tags About
   * @name GetAbouts
   * @request GET:/abouts
   * @secure
   */
  export namespace GetAbouts {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      "pagination[withCount]"?: boolean;
      /** Page number (default: 0) */
      "pagination[page]"?: number;
      /** Page size (default: 25) */
      "pagination[pageSize]"?: number;
      /** Offset value (default: 0) */
      "pagination[start]"?: number;
      /** Number of entities to return (default: 25) */
      "pagination[limit]"?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: object;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetAboutsData;
  }

  /**
   * No description
   * @tags About
   * @name PostAbouts
   * @request POST:/abouts
   * @secure
   */
  export namespace PostAbouts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AboutRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostAboutsData;
  }

  /**
   * No description
   * @tags About
   * @name GetAboutsId
   * @request GET:/abouts/{id}
   * @secure
   */
  export namespace GetAboutsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetAboutsIdData;
  }

  /**
   * No description
   * @tags About
   * @name PutAboutsId
   * @request PUT:/abouts/{id}
   * @secure
   */
  export namespace PutAboutsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = AboutRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutAboutsIdData;
  }

  /**
   * No description
   * @tags About
   * @name DeleteAboutsId
   * @request DELETE:/abouts/{id}
   * @secure
   */
  export namespace DeleteAboutsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteAboutsIdData;
  }

  /**
   * No description
   * @tags About
   * @name PostAboutsIdLocalizations
   * @request POST:/abouts/{id}/localizations
   * @secure
   */
  export namespace PostAboutsIdLocalizations {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = AboutLocalizationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostAboutsIdLocalizationsData;
  }
}

export namespace Banner {
  /**
   * No description
   * @tags Banner
   * @name GetBanners
   * @request GET:/banners
   * @secure
   */
  export namespace GetBanners {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      "pagination[withCount]"?: boolean;
      /** Page number (default: 0) */
      "pagination[page]"?: number;
      /** Page size (default: 25) */
      "pagination[pageSize]"?: number;
      /** Offset value (default: 0) */
      "pagination[start]"?: number;
      /** Number of entities to return (default: 25) */
      "pagination[limit]"?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: object;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetBannersData;
  }

  /**
   * No description
   * @tags Banner
   * @name PostBanners
   * @request POST:/banners
   * @secure
   */
  export namespace PostBanners {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BannerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostBannersData;
  }

  /**
   * No description
   * @tags Banner
   * @name GetBannersId
   * @request GET:/banners/{id}
   * @secure
   */
  export namespace GetBannersId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetBannersIdData;
  }

  /**
   * No description
   * @tags Banner
   * @name PutBannersId
   * @request PUT:/banners/{id}
   * @secure
   */
  export namespace PutBannersId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = BannerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutBannersIdData;
  }

  /**
   * No description
   * @tags Banner
   * @name DeleteBannersId
   * @request DELETE:/banners/{id}
   * @secure
   */
  export namespace DeleteBannersId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteBannersIdData;
  }

  /**
   * No description
   * @tags Banner
   * @name PostBannersIdLocalizations
   * @request POST:/banners/{id}/localizations
   * @secure
   */
  export namespace PostBannersIdLocalizations {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = BannerLocalizationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostBannersIdLocalizationsData;
  }
}

export namespace Category {
  /**
   * No description
   * @tags Category
   * @name GetCategories
   * @request GET:/categories
   * @secure
   */
  export namespace GetCategories {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      "pagination[withCount]"?: boolean;
      /** Page number (default: 0) */
      "pagination[page]"?: number;
      /** Page size (default: 25) */
      "pagination[pageSize]"?: number;
      /** Offset value (default: 0) */
      "pagination[start]"?: number;
      /** Number of entities to return (default: 25) */
      "pagination[limit]"?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: object;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetCategoriesData;
  }

  /**
   * No description
   * @tags Category
   * @name PostCategories
   * @request POST:/categories
   * @secure
   */
  export namespace PostCategories {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CategoryRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostCategoriesData;
  }

  /**
   * No description
   * @tags Category
   * @name GetCategoriesId
   * @request GET:/categories/{id}
   * @secure
   */
  export namespace GetCategoriesId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetCategoriesIdData;
  }

  /**
   * No description
   * @tags Category
   * @name PutCategoriesId
   * @request PUT:/categories/{id}
   * @secure
   */
  export namespace PutCategoriesId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = CategoryRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutCategoriesIdData;
  }

  /**
   * No description
   * @tags Category
   * @name DeleteCategoriesId
   * @request DELETE:/categories/{id}
   * @secure
   */
  export namespace DeleteCategoriesId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteCategoriesIdData;
  }

  /**
   * No description
   * @tags Category
   * @name PostCategoriesIdLocalizations
   * @request POST:/categories/{id}/localizations
   * @secure
   */
  export namespace PostCategoriesIdLocalizations {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = CategoryLocalizationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostCategoriesIdLocalizationsData;
  }
}

export namespace Contact {
  /**
   * No description
   * @tags Contact
   * @name GetContacts
   * @request GET:/contacts
   * @secure
   */
  export namespace GetContacts {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      "pagination[withCount]"?: boolean;
      /** Page number (default: 0) */
      "pagination[page]"?: number;
      /** Page size (default: 25) */
      "pagination[pageSize]"?: number;
      /** Offset value (default: 0) */
      "pagination[start]"?: number;
      /** Number of entities to return (default: 25) */
      "pagination[limit]"?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: object;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetContactsData;
  }

  /**
   * No description
   * @tags Contact
   * @name PostContacts
   * @request POST:/contacts
   * @secure
   */
  export namespace PostContacts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ContactRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostContactsData;
  }

  /**
   * No description
   * @tags Contact
   * @name GetContactsId
   * @request GET:/contacts/{id}
   * @secure
   */
  export namespace GetContactsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetContactsIdData;
  }

  /**
   * No description
   * @tags Contact
   * @name PutContactsId
   * @request PUT:/contacts/{id}
   * @secure
   */
  export namespace PutContactsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = ContactRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutContactsIdData;
  }

  /**
   * No description
   * @tags Contact
   * @name DeleteContactsId
   * @request DELETE:/contacts/{id}
   * @secure
   */
  export namespace DeleteContactsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteContactsIdData;
  }

  /**
   * No description
   * @tags Contact
   * @name PostContactsIdLocalizations
   * @request POST:/contacts/{id}/localizations
   * @secure
   */
  export namespace PostContactsIdLocalizations {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = ContactLocalizationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostContactsIdLocalizationsData;
  }
}

export namespace DeliveryPayment {
  /**
   * No description
   * @tags Delivery-payment
   * @name GetDeliveryPayments
   * @request GET:/delivery-payments
   * @secure
   */
  export namespace GetDeliveryPayments {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      "pagination[withCount]"?: boolean;
      /** Page number (default: 0) */
      "pagination[page]"?: number;
      /** Page size (default: 25) */
      "pagination[pageSize]"?: number;
      /** Offset value (default: 0) */
      "pagination[start]"?: number;
      /** Number of entities to return (default: 25) */
      "pagination[limit]"?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: object;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetDeliveryPaymentsData;
  }

  /**
   * No description
   * @tags Delivery-payment
   * @name PostDeliveryPayments
   * @request POST:/delivery-payments
   * @secure
   */
  export namespace PostDeliveryPayments {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DeliveryPaymentRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostDeliveryPaymentsData;
  }

  /**
   * No description
   * @tags Delivery-payment
   * @name GetDeliveryPaymentsId
   * @request GET:/delivery-payments/{id}
   * @secure
   */
  export namespace GetDeliveryPaymentsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetDeliveryPaymentsIdData;
  }

  /**
   * No description
   * @tags Delivery-payment
   * @name PutDeliveryPaymentsId
   * @request PUT:/delivery-payments/{id}
   * @secure
   */
  export namespace PutDeliveryPaymentsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = DeliveryPaymentRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutDeliveryPaymentsIdData;
  }

  /**
   * No description
   * @tags Delivery-payment
   * @name DeleteDeliveryPaymentsId
   * @request DELETE:/delivery-payments/{id}
   * @secure
   */
  export namespace DeleteDeliveryPaymentsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteDeliveryPaymentsIdData;
  }

  /**
   * No description
   * @tags Delivery-payment
   * @name PostDeliveryPaymentsIdLocalizations
   * @request POST:/delivery-payments/{id}/localizations
   * @secure
   */
  export namespace PostDeliveryPaymentsIdLocalizations {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = DeliveryPaymentLocalizationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostDeliveryPaymentsIdLocalizationsData;
  }
}

export namespace Order {
  /**
   * No description
   * @tags Order
   * @name GetOrders
   * @request GET:/orders
   * @secure
   */
  export namespace GetOrders {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      "pagination[withCount]"?: boolean;
      /** Page number (default: 0) */
      "pagination[page]"?: number;
      /** Page size (default: 25) */
      "pagination[pageSize]"?: number;
      /** Offset value (default: 0) */
      "pagination[start]"?: number;
      /** Number of entities to return (default: 25) */
      "pagination[limit]"?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: object;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetOrdersData;
  }

  /**
   * No description
   * @tags Order
   * @name PostOrders
   * @request POST:/orders
   * @secure
   */
  export namespace PostOrders {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OrderRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostOrdersData;
  }

  /**
   * No description
   * @tags Order
   * @name GetOrdersId
   * @request GET:/orders/{id}
   * @secure
   */
  export namespace GetOrdersId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetOrdersIdData;
  }

  /**
   * No description
   * @tags Order
   * @name PutOrdersId
   * @request PUT:/orders/{id}
   * @secure
   */
  export namespace PutOrdersId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = OrderRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutOrdersIdData;
  }

  /**
   * No description
   * @tags Order
   * @name DeleteOrdersId
   * @request DELETE:/orders/{id}
   * @secure
   */
  export namespace DeleteOrdersId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteOrdersIdData;
  }
}

export namespace Product {
  /**
   * No description
   * @tags Product
   * @name GetProducts
   * @request GET:/products
   * @secure
   */
  export namespace GetProducts {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      "pagination[withCount]"?: boolean;
      /** Page number (default: 0) */
      "pagination[page]"?: number;
      /** Page size (default: 25) */
      "pagination[pageSize]"?: number;
      /** Offset value (default: 0) */
      "pagination[start]"?: number;
      /** Number of entities to return (default: 25) */
      "pagination[limit]"?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: object;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetProductsData;
  }

  /**
   * No description
   * @tags Product
   * @name PostProducts
   * @request POST:/products
   * @secure
   */
  export namespace PostProducts {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ProductRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostProductsData;
  }

  /**
   * No description
   * @tags Product
   * @name GetProductsId
   * @request GET:/products/{id}
   * @secure
   */
  export namespace GetProductsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetProductsIdData;
  }

  /**
   * No description
   * @tags Product
   * @name PutProductsId
   * @request PUT:/products/{id}
   * @secure
   */
  export namespace PutProductsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = ProductRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutProductsIdData;
  }

  /**
   * No description
   * @tags Product
   * @name DeleteProductsId
   * @request DELETE:/products/{id}
   * @secure
   */
  export namespace DeleteProductsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteProductsIdData;
  }

  /**
   * No description
   * @tags Product
   * @name PostProductsIdLocalizations
   * @request POST:/products/{id}/localizations
   * @secure
   */
  export namespace PostProductsIdLocalizations {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = ProductLocalizationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostProductsIdLocalizationsData;
  }
}

export namespace Promotion {
  /**
   * No description
   * @tags Promotion
   * @name GetPromotions
   * @request GET:/promotions
   * @secure
   */
  export namespace GetPromotions {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Sort by attributes ascending (asc) or descending (desc) */
      sort?: string;
      /** Return page/pageSize (default: true) */
      "pagination[withCount]"?: boolean;
      /** Page number (default: 0) */
      "pagination[page]"?: number;
      /** Page size (default: 25) */
      "pagination[pageSize]"?: number;
      /** Offset value (default: 0) */
      "pagination[start]"?: number;
      /** Number of entities to return (default: 25) */
      "pagination[limit]"?: number;
      /** Fields to return (ex: title,author) */
      fields?: string;
      /** Relations to return */
      populate?: string;
      /** Filters to apply */
      filters?: object;
      /** Locale to apply */
      locale?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetPromotionsData;
  }

  /**
   * No description
   * @tags Promotion
   * @name PostPromotions
   * @request POST:/promotions
   * @secure
   */
  export namespace PostPromotions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PromotionRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostPromotionsData;
  }

  /**
   * No description
   * @tags Promotion
   * @name GetPromotionsId
   * @request GET:/promotions/{id}
   * @secure
   */
  export namespace GetPromotionsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetPromotionsIdData;
  }

  /**
   * No description
   * @tags Promotion
   * @name PutPromotionsId
   * @request PUT:/promotions/{id}
   * @secure
   */
  export namespace PutPromotionsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PromotionRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PutPromotionsIdData;
  }

  /**
   * No description
   * @tags Promotion
   * @name DeletePromotionsId
   * @request DELETE:/promotions/{id}
   * @secure
   */
  export namespace DeletePromotionsId {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeletePromotionsIdData;
  }

  /**
   * No description
   * @tags Promotion
   * @name PostPromotionsIdLocalizations
   * @request POST:/promotions/{id}/localizations
   * @secure
   */
  export namespace PostPromotionsIdLocalizations {
    export type RequestParams = {
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PromotionLocalizationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PostPromotionsIdLocalizationsData;
  }
}

export namespace UploadFile {
  /**
   * @description Upload files
   * @tags Upload - File
   * @name UploadCreate
   * @request POST:/upload
   * @secure
   */
  export namespace UploadCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UploadCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = UploadCreateData;
  }

  /**
   * @description Upload file information
   * @tags Upload - File
   * @name UploadIdCreate
   * @request POST:/upload?id={id}
   * @secure
   */
  export namespace UploadIdCreate {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      /** File id */
      id: string;
    };
    export type RequestBody = UploadIdCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = UploadIdCreateData;
  }

  /**
   * No description
   * @tags Upload - File
   * @name FilesList
   * @request GET:/upload/files
   * @secure
   */
  export namespace FilesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FilesListData;
  }

  /**
   * No description
   * @tags Upload - File
   * @name FilesDetail
   * @request GET:/upload/files/{id}
   * @secure
   */
  export namespace FilesDetail {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FilesDetailData;
  }

  /**
   * No description
   * @tags Upload - File
   * @name FilesDelete
   * @request DELETE:/upload/files/{id}
   * @secure
   */
  export namespace FilesDelete {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FilesDeleteData;
  }
}

export namespace UsersPermissionsAuth {
  /**
   * @description Redirects to provider login before being redirect to /auth/{provider}/callback
   * @tags Users-Permissions - Auth
   * @name ConnectDetail
   * @summary Login with a provider
   * @request GET:/connect/{provider}
   * @secure
   */
  export namespace ConnectDetail {
    export type RequestParams = {
      /**
       * Provider name
       * @pattern .*
       */
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Returns a jwt token and user info
   * @tags Users-Permissions - Auth
   * @name LocalCreate
   * @summary Local login
   * @request POST:/auth/local
   * @secure
   */
  export namespace LocalCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LocalCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = LocalCreateData;
  }

  /**
   * @description Returns a jwt token and user info
   * @tags Users-Permissions - Auth
   * @name LocalRegisterCreate
   * @summary Register a user
   * @request POST:/auth/local/register
   * @secure
   */
  export namespace LocalRegisterCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LocalRegisterCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = LocalRegisterCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name CallbackDetail
   * @summary Default Callback from provider auth
   * @request GET:/auth/{provider}/callback
   * @secure
   */
  export namespace CallbackDetail {
    export type RequestParams = {
      /** Provider name */
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CallbackDetailData;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name ForgotPasswordCreate
   * @summary Send rest password email
   * @request POST:/auth/forgot-password
   * @secure
   */
  export namespace ForgotPasswordCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ForgotPasswordCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ForgotPasswordCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name ResetPasswordCreate
   * @summary Rest user password
   * @request POST:/auth/reset-password
   * @secure
   */
  export namespace ResetPasswordCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ResetPasswordCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ResetPasswordCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name ChangePasswordCreate
   * @summary Update user's own password
   * @request POST:/auth/change-password
   * @secure
   */
  export namespace ChangePasswordCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangePasswordCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = ChangePasswordCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name EmailConfirmationList
   * @summary Confirm user email
   * @request GET:/auth/email-confirmation
   * @secure
   */
  export namespace EmailConfirmationList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** confirmation token received by email */
      confirmation?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * No description
   * @tags Users-Permissions - Auth
   * @name SendEmailConfirmationCreate
   * @summary Send confirmation email
   * @request POST:/auth/send-email-confirmation
   * @secure
   */
  export namespace SendEmailConfirmationCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SendEmailConfirmationCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SendEmailConfirmationCreateData;
  }
}

export namespace UsersPermissionsUsersRoles {
  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name PermissionsList
   * @summary Get default generated permissions
   * @request GET:/users-permissions/permissions
   * @secure
   */
  export namespace PermissionsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PermissionsListData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name RolesList
   * @summary List roles
   * @request GET:/users-permissions/roles
   * @secure
   */
  export namespace RolesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RolesListData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name RolesCreate
   * @summary Create a role
   * @request POST:/users-permissions/roles
   * @secure
   */
  export namespace RolesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      name?: string;
      description?: string;
      type?: string;
      permissions?: UsersPermissionsPermissionsTree;
    };
    export type RequestHeaders = {};
    export type ResponseBody = RolesCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name RolesDetail
   * @summary Get a role
   * @request GET:/users-permissions/roles/{id}
   * @secure
   */
  export namespace RolesDetail {
    export type RequestParams = {
      /** role Id */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RolesDetailData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name RolesUpdate
   * @summary Update a role
   * @request PUT:/users-permissions/roles/{role}
   * @secure
   */
  export namespace RolesUpdate {
    export type RequestParams = {
      /** role Id */
      role: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      name?: string;
      description?: string;
      type?: string;
      permissions?: UsersPermissionsPermissionsTree;
    };
    export type RequestHeaders = {};
    export type ResponseBody = RolesUpdateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name RolesDelete
   * @summary Delete a role
   * @request DELETE:/users-permissions/roles/{role}
   * @secure
   */
  export namespace RolesDelete {
    export type RequestParams = {
      /** role Id */
      role: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RolesDeleteData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name UsersList
   * @summary Get list of users
   * @request GET:/users
   * @secure
   */
  export namespace UsersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UsersListData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name UsersCreate
   * @summary Create a user
   * @request POST:/users
   * @secure
   */
  export namespace UsersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UsersCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = UsersCreateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name UsersDetail
   * @summary Get a user
   * @request GET:/users/{id}
   * @secure
   */
  export namespace UsersDetail {
    export type RequestParams = {
      /** user Id */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UsersDetailData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name UsersUpdate
   * @summary Update a user
   * @request PUT:/users/{id}
   * @secure
   */
  export namespace UsersUpdate {
    export type RequestParams = {
      /** user Id */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UsersUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = UsersUpdateData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name UsersDelete
   * @summary Delete a user
   * @request DELETE:/users/{id}
   * @secure
   */
  export namespace UsersDelete {
    export type RequestParams = {
      /** user Id */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UsersDeleteData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name GetUsersPermissionsUsersRoles
   * @summary Get authenticated user info
   * @request GET:/users/me
   * @secure
   */
  export namespace GetUsersPermissionsUsersRoles {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetUsersPermissionsUsersRolesData;
  }

  /**
   * No description
   * @tags Users-Permissions - Users & Roles
   * @name CountList
   * @summary Get user count
   * @request GET:/users/count
   * @secure
   */
  export namespace CountList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CountListData;
  }
}
