import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackParamList } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import MainTabBar from './MainTabBar';
import HomeScreen from 'screens/Home';
import SettingScreen from 'screens/Setting';

const Tab = createBottomTabNavigator<StackParamList>();

const MainTabBarScreen = (): React.ReactElement => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScreenName.HomeScreen}
      backBehavior={'initialRoute'}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <MainTabBar {...props} />}>
      <Tab.Screen name={ScreenName.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={ScreenName.SettingScreen} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default MainTabBarScreen;
