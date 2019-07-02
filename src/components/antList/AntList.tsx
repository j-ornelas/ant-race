import React, { Component } from 'react';
import { Ant } from '../../interfaces';
import { AntListItem } from '../antListItem/AntListItem';
import { AntListContainer } from './antListStyles';

interface HomeProps {
  ants: Ant[]
}
export class AntList extends Component<HomeProps> {
  render() {
    return (
      <AntListContainer
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      >
      {this.props.ants.map((ant:Ant) => (
        <AntListItem key={ant.name} ant={ant} />
      ))}
      </AntListContainer>
    )
  }
}
