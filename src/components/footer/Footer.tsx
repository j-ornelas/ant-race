import React, { Component } from 'react';
import { FooterContainer, CalculateButton, AnimationContainer, StatusText } from './footerStyles';
import { Animated, Dimensions, Image } from 'react-native';
import { Ant } from '../../interfaces';

interface FooterProps {
  startCalculating():void;
  allAnts:Ant[];
}
export class Footer extends Component<FooterProps> {
  constructor(
    props:FooterProps,
    public antPosition = new Animated.ValueXY({ x: -200, y: 0 }),
    public antPosition2 = new Animated.ValueXY({ x: -240, y: 0 }),
    public antPosition3 = new Animated.ValueXY({ x: -260, y: 0 })
  ) {
    super(props);
    this.antPosition = new Animated.ValueXY({ x: -200, y: 0 }),
    this.antPosition2 = new Animated.ValueXY({ x: -240, y: 0 }),
    this.antPosition3 = new Animated.ValueXY({ x: -260, y: 0 })
  }

  componentDidMount() {
    this.moveAcrossScreen(this.antPosition, 2000);
    this.moveAcrossScreen(this.antPosition2, 3000);
    this.moveAcrossScreen(this.antPosition3, 2500);
  }

  moveAcrossScreen(positionProp:Animated.ValueXY, duration:number):void {
    Animated.loop(
      Animated.timing(positionProp, {
        toValue: { x: Dimensions.get('window').width, y: 0 },
        duration: duration,
      })
    ).start()
  }

  hasYetToCalculate():boolean {
    return this.props.allAnts.every((ant) => ant.isCalculating === undefined);
  }

  hasFinishedCalculating():boolean {
    return this.props.allAnts.every((ant) => ant.chanceToWin !== undefined)
  }

  renderStatus(hasYetToCalc:boolean, hasFinished:boolean):string {
    if (hasYetToCalc) return 'RUN CALCULATION!';
    if (hasFinished) return 'CALCULATION COMPLETED!'
    return 'CALCULATING...'

  }

  render() {
    const hasYetToCalc = this.hasYetToCalculate();
    const hasFinished = this.hasFinishedCalculating();

    return (
      <FooterContainer>
         <CalculateButton onPress={this.props.startCalculating}>
           <StatusText>{this.renderStatus(hasYetToCalc, hasFinished)}</StatusText>
         </CalculateButton>
         <AnimationContainer>
           <Animated.View style={[this.antPosition.getLayout()]}>
           <Image
             style={{ width: 25, height: 25 }}
             source={{ uri: 'https://image.flaticon.com/icons/png/512/1850/1850258.png'}}
           />
           </Animated.View>

           <Animated.View style={[this.antPosition2.getLayout()]}>
           <Image
             style={{ width: 25, height: 25 }}
             source={{ uri: 'https://image.flaticon.com/icons/png/512/1850/1850258.png'}}
           />
           </Animated.View>

           <Animated.View style={[this.antPosition3.getLayout()]}>
           <Image
             style={{ width: 25, height: 25 }}
             source={{ uri: 'https://image.flaticon.com/icons/png/512/1850/1850258.png'}}
           />
           </Animated.View>
         </AnimationContainer>
      </FooterContainer>
    );
  }
}
