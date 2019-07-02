import React, { Component } from 'react';
import { Ant } from '../../interfaces';
import {
  AntContainer, AntStatus, InfoContainer, Title, Value
} from './antListItemStyles';

interface AntListItemProps {
  ant: Ant;
}
export class AntListItem extends Component<AntListItemProps> {
  generateStatusColor():string {
    const { ant } = this.props;
    if (ant.isCalculating === undefined) return 'gray';
    if (ant.isCalculating === true) return 'red';
    return 'green';
  }

  render() {
    return (
      <AntContainer>
        <AntStatus statusColor={this.generateStatusColor()} />
        <InfoContainer>
          <Title>Name: <Value>{this.props.ant.name}</Value></Title>
          <Title>Color: <Value>{this.props.ant.color}</Value></Title>
          <Title>Length: <Value>{this.props.ant.length}</Value></Title>
          <Title>Weight: <Value>{this.props.ant.weight}</Value></Title>
        </InfoContainer>
      </AntContainer>
    );
  }
}
