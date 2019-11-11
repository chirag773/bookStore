import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ViewMoreScreen extends Component {
    static navigationOptions = () => ({
        title: 'View More',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#2F95D6',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,
          
        },
        headerTitleStyle: {
          fontSize: 18,
        },
    });

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
