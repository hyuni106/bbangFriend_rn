import React from 'react';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { TouchableOpacity } from 'components/common/Base';

export const BUTTON_WIDTH = 35;

export interface NavBarButtonProps {
  style?: StyleProp<ViewStyle>;
  icon: React.ComponentType<SvgProps>;
  onPress?: () => void;
}

const NavBarButton = (props: NavBarButtonProps): React.ReactElement => {
  const { style, onPress } = props;

  return (
    <TouchableOpacity style={[styles.root, style]} hitSlop={8} onPress={onPress}>
      <props.icon width={BUTTON_WIDTH} height={BUTTON_WIDTH} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
  },
});

export default NavBarButton;
