import type { Schema, Struct } from '@strapi/strapi';

export interface NewsDescription extends Struct.ComponentSchema {
  collectionName: 'components_news_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProjectPartners extends Struct.ComponentSchema {
  collectionName: 'components_project_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    partnerName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectResults extends Struct.ComponentSchema {
  collectionName: 'components_project_results';
  info: {
    displayName: 'results';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'news.description': NewsDescription;
      'project.partners': ProjectPartners;
      'project.results': ProjectResults;
    }
  }
}
