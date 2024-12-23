import React from 'react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from './ScreenNames';
import { StackParamList } from './NavigationProps';

import SplashScreen from 'screens/Splash';
import MainTabBarScreen from './MainTabBar';
import RecipeListScreen from 'screens/RecipeList';
import CreateRecipeScreen from 'screens/CreateRecipe';
import ModifyRecipeScreen from 'screens/ModifyRecipe';
import RecipeDetailScreen from 'screens/RecipeDetail';

export const navigationRef = createNavigationContainerRef<StackParamList>();
const Stack = createStackNavigator<StackParamList>();

const Navigation = (): React.ReactElement => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={ScreenName.SplashScreen}>
        <Stack.Screen name={ScreenName.SplashScreen} component={SplashScreen} />
        <Stack.Screen
          name={ScreenName.MainTabBarScreen}
          component={MainTabBarScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen name={ScreenName.RecipeListScreen} component={RecipeListScreen} />
        <Stack.Screen name={ScreenName.CreateRecipeScreen} component={CreateRecipeScreen} />
        <Stack.Screen name={ScreenName.ModifyRecipeScreen} component={ModifyRecipeScreen} />
        <Stack.Screen name={ScreenName.RecipeDetailScreen} component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
