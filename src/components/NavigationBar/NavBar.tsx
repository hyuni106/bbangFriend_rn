import React, { useMemo } from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  ColorValue,
  useWindowDimensions,
  ScaledSize,
} from 'react-native';

import { Colors, Dimens, Typography } from 'styles';
import NavBarButton, { BUTTON_WIDTH, NavBarButtonProps } from './NavBarButton';
import { Text } from 'components/common/Base';

const leftButtonMarginLeft = 11.5;
const rightButtonMarginRight = 14;
const titleMarginHorizontal = Math.max(leftButtonMarginLeft, rightButtonMarginRight) + BUTTON_WIDTH;

export type Button = Omit<NavBarButtonProps, 'style' | 'hitSlop' | 'color'>;

export interface NavBarProps {
  style?: StyleProp<ViewStyle>;
  backgroundColor?: ColorValue;
  leftButton?: Button;
  rightButton?: Button;
  title?: string;
  titleColor?: ColorValue;
}

const NavBar = (props: NavBarProps): React.ReactElement => {
  const window = useWindowDimensions();
  const styles = useMemo(() => createStyles(window), [window]);

  const {
    style,
    backgroundColor = Colors.white,
    leftButton,
    rightButton,
    title,
    titleColor = Colors.gray1,
  } = props;

  return (
    <View style={[styles.root, { backgroundColor }, style]}>
      <View style={[styles.navBarContainer]}>
        {leftButton && <NavBarButton style={styles.leftButton} {...leftButton} />}
        <Text style={[styles.title, { color: titleColor }]} numberOfLines={1} lineBreakMode="tail">
          {title}
        </Text>
        {rightButton && <NavBarButton style={styles.rightButton} {...rightButton} />}
      </View>
    </View>
  );
};

const createStyles = (scaledSize: ScaledSize) => {
  return StyleSheet.create({
    root: {
      width: Dimens.screenWidth,
      height: Dimens.navBarHeight,
    },
    navBarContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    leftButton: {
      position: 'absolute',
      top: 9,
      left: leftButtonMarginLeft,
    },
    title: {
      position: 'absolute',
      ...Typography.title_18B,
      textAlign: 'center',
      left: titleMarginHorizontal,
      width: scaledSize.width - titleMarginHorizontal * 2,
    },
    rightButton: {
      position: 'absolute',
      top: 9,
      right: rightButtonMarginRight,
    },
  });
};

export default NavBar;
