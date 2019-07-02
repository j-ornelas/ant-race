import React, { Component } from 'react';
import { Ant } from '../../interfaces';
import { AntListItem } from '../antListItem/AntListItem';

interface HomeProps {
  ants: Ant[]
}
export class AntList extends Component<HomeProps> {
  render() {
    return this.props.ants.map((ant:Ant) => (
        <AntListItem key={ant.name} ant={ant} />
      ))}
}
