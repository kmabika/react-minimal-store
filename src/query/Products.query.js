import { Query, Field } from '@tilework/opus';

export class ProductsQuery {
  getProductsListQuery(categoryName) {
    return new Query('category', true)
      .addArgument('input', 'CategoryInput!', { title: categoryName })
      .addField('name')
      .addField(
        new Field('products', true)
          .addFieldList(['id', 'category', 'name', 'brand', 'inStock'])
          .addField(
            new Field('attributes', true)
              .addFieldList(['id', 'type', 'name'])
              .addField(
                new Field('items', true).addFieldList([
                  'id',
                  'value',
                  'displayValue',
                ])
              )
          )
          .addField(new Field('gallery', true))
          .addField(
            new Field('prices', true)
              .addField('amount')
              .addField(
                new Field('currency', true).addFieldList(['label', 'symbol'])
              )
          )
      );
  }

  getProductQuery(id) {
    return new Query('product', true)
      .addFieldList([
        'id',
        'category',
        'name',
        'brand',
        'description',
        'inStock',
      ])
      .addField(new Field('gallery', true))
      .addField(
        new Field('attributes', true)
          .addFieldList(['id', 'name', 'type'])
          .addField(
            new Field('items', true).addFieldList([
              'id',
              'displayValue',
              'value',
            ])
          )
      )
      .addField(
        new Field('prices', true)
          .addField('amount')
          .addField(
            new Field('currency', true).addFieldList(['symbol', 'label'])
          )
      )
      .addArgument('id', 'String!', id);
  }
}

export default new ProductsQuery();
