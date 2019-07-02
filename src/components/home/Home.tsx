import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../../redux/reducers';
import { AntStateInterface } from '../../redux/reducers/antReducers';
import { HomeContainer } from './homeStyles';
import { AntList } from '../antList/AntList';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Ant } from '../../interfaces';
import { setAnts } from '../../redux/actions';

interface HomeProps {
  ants: Ant[];
  setAnts: Function;
  antState: AntStateInterface;
}
class HomeComponent extends Component<HomeProps> {
  componentDidMount() {
    this.props.setAnts(this.props.ants);
  }

  render() {
    return (
      <HomeContainer>
        <Header />
        <AntList ants={this.props.antState.allAnts}/>
        <Footer />
      </HomeContainer>
    );
  }
}


const mapStateToProps = ({ antState }:StoreState) => ({
  antState,
})
const mapActionsToProps = (dispatch:Dispatch) => ({
  setAnts(ants:Ant[]) {
    return dispatch(setAnts(ants));
  },
});

export const Home = connect(mapStateToProps, mapActionsToProps)(HomeComponent);
