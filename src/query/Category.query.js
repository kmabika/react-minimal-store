import { Query } from '@tilework/opus';

export class CategoryQuery {
  getCategoriesListQuery() {
    return new Query('categories', true).addField('name');
  }
}

export default new CategoryQuery();
