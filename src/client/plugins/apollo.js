import Vue from 'vue';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import 'isomorphic-fetch';

const API_ENDPOINT = 'http://localhost:3000/graphql'

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: API_ENDPOINT,
    transportBatching: true,
  }),
});

export default apolloClient;