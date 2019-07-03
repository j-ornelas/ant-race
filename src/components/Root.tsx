import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Home } from './home/Home';
import { Query } from 'react-apollo';
import { StoreState } from '../redux/reducers';
import { UserStateInterface } from '../redux/reducers/userReducers';
import { Login } from './login/Login';

import { GET_ANTS } from '../graphql';

interface RootProps {
  loginUser:Function;
  userState:UserStateInterface
}
class RootComponent extends Component<RootProps> {
  render() {
    return this.props.userState.token ? (
      <Query
        query={GET_ANTS}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          if (data) return <Home ants={data.ants} />
        }}
      </Query>
    ) : (
      <Login />
    );
  }
}
const mapStateToProps = ({ userState }:StoreState) => ({
  userState,
})

export default connect(mapStateToProps, null)(RootComponent);
