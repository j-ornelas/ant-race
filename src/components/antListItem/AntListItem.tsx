import React, { Component } from 'react';
import { Text } from 'react-native';
import { Ant } from '../../interfaces';

interface HomeProps {
  ant: Ant;
}
export class AntListItem extends Component<HomeProps> {
  render() {
    return (
      <Text>{this.props.ant.name}</Text>
    );
  }
}
