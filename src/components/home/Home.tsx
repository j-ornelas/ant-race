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

  sortAnts():Ant[] {
    const sortedAnts = [...this.props.antState.allAnts ];
    sortedAnts.sort((a,b) => {
      if (a.chanceToWin === undefined) return -1;
      if (b.chanceToWin === undefined) return 1;
      return a.chanceToWin - b.chanceToWin
    }).reverse();
    return sortedAnts;
  }

  render() {
    return (
      <HomeContainer>
        <Header />
        <AntList ants={this.sortAnts()}/>
        <Footer startCalculating={() => this.startCalculating()}/>
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
