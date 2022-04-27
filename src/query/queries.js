import { gql } from '@apollo/client';
import client from 'Query/client'


const GET_CATEGORIES = client.query({
  query: gql`
  {
    categories {
    name
  }
}
  `
});

const GET_PRODUCTS_QUERY = (cat) => {
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
              id
              name
              type
              items {
                id
                displayValue
                value
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
};


const GET_CURRENCIES = client.query({
  query: gql`
  {
     currencies {
        label
         symbol
        }
      }
  `
});

const GET_SELECTED_CURRENCY = gql`
  {
    selectedCurrency @client
  }
`
export { GET_CATEGORIES, GET_CURRENCIES, GET_PRODUCTS_QUERY, GET_SELECTED_CURRENCY}