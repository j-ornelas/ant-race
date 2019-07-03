import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Button } from 'react-native';
import { Dispatch } from 'redux';
import { loginUser } from '../../redux/actions';
import { LoginResponse } from '../../interfaces';
import { simulateLoginAttempt } from '../../utils';
import {
  LoginContainer,
  Username,
  Password,
  Instructions
} from './loginStyles';

interface LoginProps {
  loginUser:Function;
}
export class LoginComponent extends Component<LoginProps> {
  state = {
    username: '',
    password: '',
    isLoading: false,
  }

  handleTextChange(prop:string, value:any):void {
    this.setState({ [prop]: value });
  }

  attemptLogin():void {
    const login = simulateLoginAttempt();
    this.setState({ isLoading: true });
    // simulates a response from a server.
    login((serverResponse:LoginResponse) => {
      if (serverResponse.success && serverResponse.token) {
        this.props.loginUser(serverResponse);
      }
    });
  }

  render() {
    return (
      <LoginContainer>
        <Instructions>
          This login page is for demonstration purposes only. Any combination of username/password will let you continue.
        </Instructions>
        <Username
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
          placeholder="username"
        />
        <Password
          value={this.state.password}
          onChangeText={(text) => this.handleTextChange('password', text)}
          placeholder="password"
          secureTextEntry
        />
        {this.state.isLoading ? (
          <ActivityIndicator />
        ) : (
          <Button
            title="Login"
            onPress={() => this.attemptLogin()}
          />
        )}
      </LoginContainer>
    );
  }
}

const mapActionsToProps = (dispatch:Dispatch) => ({
  loginUser(serverResponse:LoginResponse) {
    return dispatch(loginUser(serverResponse));
  },
});

export const Login = connect(null, mapActionsToProps)(LoginComponent);
