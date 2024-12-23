import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, View, ColorValue } from 'react-native';

import { Colors } from 'styles';
import SingleButton from './SingleButton';

interface ButtonProps {
  title: string;
  defaultColor?: ColorValue;
  pressedColor?: ColorValue;
  onPress?: () => void;
}

interface DoubleButtonProps {
  style?: StyleProp<ViewStyle>;
  leftButton: ButtonProps;
  rightButton: ButtonProps;
}

const DoubleButton = (props: DoubleButtonProps): React.ReactElement => {
  const { style, leftButton, rightButton } = props;

  return (
    <View style={[styles.root, style]}>
      <SingleButton
        style={styles.button}
        title={leftButton.title}
        defaultColor={leftButton.defaultColor || Colors.gray4}
        pressedColor={leftButton.pressedColor || Colors.gray3}
        onPress={leftButton.onPress}
      />
      <SingleButton
        style={styles.button}
        title={rightButton.title}
        defaultColor={rightButton.defaultColor || Colors.red1}
        pressedColor={rightButton.pressedColor || Colors.red2}
        onPress={rightButton.onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    gap: 8,
  },
  button: {
    flex: 1,
  },
});

export default DoubleButton;
