import React, { Component } from 'react';
import { HomeContainer } from './homeStyles';
import { AntList } from '../antList/AntList';
import { Ant } from '../../interfaces';

interface HomeProps {
  ants: Ant[]
}
export class Home extends Component<HomeProps> {
  render() {
    return (
      <HomeContainer>
        <AntList ants={this.props.ants}/>
      </HomeContainer>
    );
  }
}
