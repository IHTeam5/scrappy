import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'

export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Scrappy: {
      navigationOptions: {
        headerTitle: 'Scrappy'
      }
    }
  })
)