import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri:
    `https://strapi-first-deployment.herokuapp.com/graphql` ||
    "http://localhost:1337/graphql"
});

export default client;
