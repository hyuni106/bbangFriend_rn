import React from 'react';
import { Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { TouchableOpacity } from 'components/common/Base';
import { Colors, Dimens, Typography } from 'styles';
import { IS_SCREEN_HEIGHT_LESS_THAN_700 } from 'utils/PlatformInfo';

interface HomeMenuProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  description: string;
  SvgBackground: React.ComponentType<SvgProps>;
  onPress?: () => void;
}

const HomeMenu = (props: HomeMenuProps): React.ReactElement => {
  const { style, title, description, SvgBackground, onPress } = props;

  const calculateButtonSize = (width: number, isSmallScreen: boolean) => {
    const aspectRatio = isSmallScreen ? 90 / 309 : 120 / 309;
    const buttonWidth = width - 72;
    const buttonHeight = buttonWidth * aspectRatio;
    const viewBox = isSmallScreen ? `0 0 309 90` : `0 0 309 120`;

    return { buttonWidth, buttonHeight, viewBox };
  };

  const { buttonWidth, buttonHeight, viewBox } = calculateButtonSize(
    Dimens.screenWidth,
    IS_SCREEN_HEIGHT_LESS_THAN_700,
  );

  return (
    <TouchableOpacity style={[styles.root, { height: buttonHeight }, style]} onPress={onPress}>
      <SvgBackground
        style={styles.svgWrapper}
        width={buttonWidth}
        height={buttonHeight}
        viewBox={viewBox}
      />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descText}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  svgWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  titleText: {
    ...Typography.title_20B,
    color: Colors.white,
  },
  descText: {
    ...Typography.body_12M,
    color: Colors.white,
    marginTop: 4,
  },
});

export default HomeMenu;
