import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page extends Component {
    render(){
        return (
            <View style={styles.container}>
              <Text>This is {this.props.route.name}.</Text>
              <Text>This is {this.props.route.params.title}.</Text>
              <Button
                title='Set Params to Native'
                onPress={ () =>{
                  this.props.navigation.setParams({ title: 'Native'})
                }}
              />
              <Button
                title='Back'
                onPress={ () =>{
                  this.props.navigation.goBack()
                }}
              />
            </View>
        );
    }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
