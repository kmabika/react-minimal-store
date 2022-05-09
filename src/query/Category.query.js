import { Query } from '@tilework/opus';

/** @namespace Query/Cart/Query */
export class CategoryQuery {

    getCategoriesListQuery(){
      const query = new Query('categories',true).addField('name');
      return query;
    }
};

export default new CategoryQuery();
