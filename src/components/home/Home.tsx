import React, { Component } from 'react';
import { HomeContainer } from './homeStyles';
import { AntList } from '../antList/AntList';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Ant } from '../../interfaces';

interface HomeProps {
  ants: Ant[]
}
export class Home extends Component<HomeProps> {
  render() {
    return (
      <HomeContainer>
        <Header />
        <AntList ants={this.props.ants}/>
        <Footer />
      </HomeContainer>
    );
  }
}
