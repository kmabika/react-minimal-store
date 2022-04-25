import { InMemoryCache, gql} from "@apollo/client";
import {persistCache } from 'apollo3-cache-persist';


export const cache = new InMemoryCache();

cache.writeQuery({
    query: gql`
        query SelectedCurrencies{
            selectedCurrency @client
        }
    `,
    data: {
        selectedCurrency: "$",
    }
})

async function persistStuff(){
    await persistCache({
        cache,
        trigger: 'write',
        storage: window.localStorage,
    })
}

persistStuff();
