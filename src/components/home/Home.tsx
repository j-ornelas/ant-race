import React, { Component } from 'react';
import { HomeContainer } from './homeStyles';
import { Text } from 'react-native';
import { Ant } from '../../interfaces';

interface HomeProps {
  ants: Ant[]
}
export class Home extends Component<HomeProps> {
  render() {
    return (
      <HomeContainer>
        <Text>Number of ants: {this.props.ants.length}</Text>
      </HomeContainer>
    );
  }
}
