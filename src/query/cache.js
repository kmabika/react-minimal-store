import { InMemoryCache } from "@apollo/client";
import {persistCache, LocalStorageeWrapper } from 'apollo3-cache-persist';
export const cache = new InMemoryCache();

async function persistStuff(){
    await persistCache({
        cache,
        trigger: 'write',
        storage: new LocalStorageeWrapper(window.localStorage),
    })
}

persistStuff();
