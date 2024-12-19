import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from './ScreenNames';

export type StackParamList = {
  [ScreenName.SplashScreen]: undefined;
};

export type Props<S extends keyof StackParamList> = {
  route: RouteProp<StackParamList, S>;
  navigation: StackNavigationProp<StackParamList, S>;
};
