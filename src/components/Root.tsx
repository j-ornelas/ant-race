import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Home } from './home/Home';
import { Query } from 'react-apollo';
import { GET_ANTS } from '../graphql';

export default class App extends Component {
  render() {
    return (
      <Query
        query={GET_ANTS}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          if (data) return <Home ants={data.ants} />
        }}
      </Query>
    );
  }
}
