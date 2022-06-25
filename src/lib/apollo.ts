import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u3zw1x0h2w01tadvifgnwl/master',
    cache: new InMemoryCache()
})
