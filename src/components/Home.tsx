import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';

export class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Number of ants: {this.props.ants.length}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}
