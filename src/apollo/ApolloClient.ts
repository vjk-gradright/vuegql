import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

// HTTP connection to the API

const getHttpLink = () => {
  return createHttpLink({
    // You should use an absolute URL here
    uri: process.env.BOOKS_GQL_SERVER,
  });
};

const httpLink = getHttpLink();

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  connectToDevTools: true,
  link: httpLink,
  cache,
});

export default apolloClient;
