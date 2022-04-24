import { ApolloClient, gql } from "@apollo/client";
import { cache } from "./cache";

const uri = "http://localhost:4000/"

const client = new ApolloClient({
    uri,
    cache,
    resolvers: {}
});

export default client;