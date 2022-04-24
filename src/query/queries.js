import {gql} from '@apollo/client';
import client from 'Query/client'

export const GET_CATEGORIES  = client.query({
  query: gql`
  {
    categories {
    name
  }
}
  `
});

export const GET_PRODUCTS_QUERY  = (cat) => {
  return (
    client.query({
      query: gql`
      {
        category(input: { title: "${cat}"}) {
          name
          products {
            id
            name
            inStock
            brand
            description
            gallery
            category
            attributes {
              name
              items {
                displayValue
              }
            }
            prices {
              amount
              currency {
                label
                symbol
              }
            }
          }
      
        }
      }
      `
    })
)
}