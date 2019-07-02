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
import { setAnts, startCalculating, endCalculating } from '../../redux/actions';
import { generateAntWinLikelihoodCalculator } from '../../utils';

import { TouchableOpacity } from 'react-native';

interface HomeProps {
  ants: Ant[];
  setAnts: Function;
  antState: AntStateInterface;
  startCalculating: Function;
  endCalculating: Function;
}
class HomeComponent extends Component<HomeProps> {
  componentDidMount() {
    this.props.setAnts(this.props.ants);
  }

  startCalculating():void {
    this.props.antState.allAnts.forEach(ant => {
      this.props.startCalculating(ant);
      const generate = generateAntWinLikelihoodCalculator();
      generate((liklihood:number) => this.props.endCalculating(ant, liklihood));
    })
  }

  render() {
    return (
      <HomeContainer>
        <Header />
        <AntList ants={this.props.antState.allAnts}/>
        <Footer />
        <TouchableOpacity style={{ height: 100, width: 200, backgroundColor: 'red'}}
          onPress={() => this.startCalculating()}
        />
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
  startCalculating(ant:Ant) {
    return dispatch(startCalculating(ant));
  },
  endCalculating(ant:Ant, chanceToWin:number) {
    return dispatch(endCalculating(ant, chanceToWin));
  },
});

export const Home = connect(mapStateToProps, mapActionsToProps)(HomeComponent);
