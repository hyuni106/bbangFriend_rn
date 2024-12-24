import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { TabBar as BaseTabBar, SceneRendererProps, NavigationState } from 'react-native-tab-view';

import { Colors } from 'styles';

interface TabBarProps<T extends { key: string; title: string }> {
  style?: StyleProp<ViewStyle>;
  indicatorStyle?: StyleProp<ViewStyle>;
  props: SceneRendererProps & { navigationState: NavigationState<T> };
  activeColor?: string;
  inactiveColor?: string;
}

const TabBar = <T extends { key: string; title: string }>(
  tabBarProps: TabBarProps<T>,
): React.ReactElement => {
  const {
    props,
    activeColor = Colors.gray1,
    inactiveColor = Colors.gray2,
    indicatorStyle,
    style,
  } = tabBarProps;

  return (
    <BaseTabBar
      {...props}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      indicatorStyle={[
        styles.defaultIndicatorStyle,
        { backgroundColor: activeColor },
        indicatorStyle,
      ]}
      style={[styles.defaultTabBarStyle, style]}
    />
  );
};

const styles = StyleSheet.create({
  defaultIndicatorStyle: {
    backgroundColor: Colors.gray1,
    height: 3,
  },
  defaultTabBarStyle: {
    backgroundColor: Colors.white,
  },
});

export default TabBar;
