import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import Community  from '../screens/Community'
import Facilities from '../screens/Facility'
import ProfileScreen from '../screens/ProfileScreen'

const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen
    },
    Community: {
      screen: Community
    },
    Facilities: {
      screen: Facilities
    },
    Settings: {
      screen: SettingsScreen
    },
    Profile: {
      screen: ProfileScreen
    }

  })
export default createAppContainer(TabNavigator)


