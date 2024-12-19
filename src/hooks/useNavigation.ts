import { useNavigation as baseUseNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParamList } from 'navigation/NavigationProps';

export function useNavigation() {
  const navigation = baseUseNavigation<StackNavigationProp<StackParamList>>();
  return navigation;
}
