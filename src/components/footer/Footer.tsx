import React, { Component } from 'react';
import { FooterContainer, CalculateButton } from './footerStyles';

interface FooterProps {
  startCalculating():void;
}
export class Footer extends Component<FooterProps> {
  render() {
    return (
      <FooterContainer>
         <CalculateButton onPress={this.props.startCalculating}/>
      </FooterContainer>
    );
  }
}
