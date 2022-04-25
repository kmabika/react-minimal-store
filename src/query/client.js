import { ApolloClient, gql} from "@apollo/client";
import { cache } from "./cache";


export const typeDefs = gql`
  extend type Query {
    selectedCurrency: [String!]!
  }
`

const uri = "http://localhost:4000/"

const client = new ApolloClient({
    uri,
    cache,
    typeDefs,
    resolvers: {}
});

export default client;