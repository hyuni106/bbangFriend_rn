import React, { useCallback } from 'react';
import {
  StyleProp,
  ViewStyle,
  Pressable,
  PressableProps,
  StyleSheet,
  GestureResponderEvent,
  ColorValue,
} from 'react-native';

import { Colors, Typography } from 'styles';
import { preventDoubleTap } from 'utils/preventDoubleTap';
import { Text } from 'components/common/Base';

interface SingleButtonProps extends Pick<PressableProps, 'disabled' | 'onPress'> {
  style?: StyleProp<ViewStyle>;
  title: string;
  defaultColor?: ColorValue;
  pressedColor?: ColorValue;
}

const SingleButton = (props: SingleButtonProps): React.ReactElement => {
  const { style, title, defaultColor = Colors.gray4, pressedColor = Colors.gray3 } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _onPress = useCallback(
    preventDoubleTap((event: GestureResponderEvent): void => {
      props.onPress?.(event);
    }),
    [props.onPress],
  );

  return (
    <Pressable
      {...props}
      onPress={_onPress}
      style={({ pressed }) => [
        style,
        styles.root,
        {
          backgroundColor: pressed ? pressedColor : defaultColor,
        },
      ]}>
      <Text
        numberOfLines={1}
        lineBreakMode="tail"
        style={[
          styles.title,
          {
            color: Colors.white,
          },
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 56,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  title: {
    ...Typography.title_16B,
  },
});

export default SingleButton;
