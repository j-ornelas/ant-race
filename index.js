import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import Root from './src/components/Root';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const client = new ApolloClient({
  uri: 'https://antserver-blocjgjbpw.now.sh/graphql'
});


const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Root />
    </Provider>
  </ApolloProvider>
);

AppRegistry.registerComponent('ants', () => App);
