import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri:
    `${process.env.STRAPI_API_URL}` ||
    "http://localhost:1337/graphql"
});

export default client;
