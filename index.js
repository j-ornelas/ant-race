import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import Root from './src/components/Root';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://antserver-blocjgjbpw.now.sh/graphql'
});


const App = () => (
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>
);

AppRegistry.registerComponent('ants', () => App);
