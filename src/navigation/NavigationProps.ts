import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from './ScreenNames';

export type StackParamList = {
  [ScreenName.SplashScreen]: undefined;
  [ScreenName.MainTabBarScreen]: undefined;
  [ScreenName.HomeScreen]: undefined;
  [ScreenName.RecipeListScreen]: undefined;
  [ScreenName.CreateRecipeScreen]: undefined;
  [ScreenName.ModifyRecipeScreen]: undefined;
  [ScreenName.RecipeDetailScreen]: undefined;
  [ScreenName.RatioCalculatorScreen]: undefined;
  [ScreenName.SettingScreen]: undefined;
};

export type Props<S extends keyof StackParamList> = {
  route: RouteProp<StackParamList, S>;
  navigation: StackNavigationProp<StackParamList, S>;
};
