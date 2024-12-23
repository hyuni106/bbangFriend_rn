import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TouchableWithoutFeedback } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Colors, Typography } from 'styles';
import { Text } from 'components/common/Base';

interface MainTabBarItemProps {
  style?: StyleProp<ViewStyle>;
  normalIcon: React.ComponentType<SvgProps>;
  selectedIcon: React.ComponentType<SvgProps>;
  title: string;
  isSelected: boolean;
  onPress?: () => void;
}

const MainTabBarItem = (props: MainTabBarItemProps): React.ReactElement => {
  const { style, title, isSelected, onPress } = props;

  const tabIconSvgStyle = {
    width: 24,
    height: 24,
  } as SvgProps;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.root, style]}>
        {isSelected ? (
          <props.selectedIcon {...tabIconSvgStyle} />
        ) : (
          <props.normalIcon {...tabIconSvgStyle} />
        )}
        <Text style={[styles.title, { color: isSelected ? Colors.gray2 : Colors.gray4 }]}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 7,
    paddingBottom: 6,
  },
  title: {
    marginTop: 8,
    ...Typography.title_11B,
  },
});

export default MainTabBarItem;
