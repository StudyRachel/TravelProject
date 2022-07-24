import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { create } from 'dva-core';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import Router from './src/router';
import AttractionsModel from './src/models/attractions'

const app = create();
app.model(AttractionsModel);
app.start();
const store = app._store;

export default class App extends Component {  
  render(){
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }; 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});