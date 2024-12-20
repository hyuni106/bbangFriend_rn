import React from 'react';
import { Text, StyleSheet, useWindowDimensions, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import TouchableOpacity from 'components/TouchableOpacity';
import { Colors, Typography } from 'styles';

interface HomeMenuProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  description: string;
  SvgBackground: React.ComponentType<SvgProps>;
  onPress?: () => void;
}

const HomeMenu = (props: HomeMenuProps): React.ReactElement => {
  const { style, title, description, SvgBackground, onPress } = props;

  const window = useWindowDimensions();

  const aspectRatio = 120 / 309;
  const buttonWidth = window.width - 72;
  const buttonHeight = buttonWidth * aspectRatio;

  return (
    <TouchableOpacity style={[styles.root, { height: buttonHeight }, style]} onPress={onPress}>
      <SvgBackground style={styles.svgWrapper} width={buttonWidth} height={buttonHeight} />

      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descText}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    paddingHorizontal: 20,
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
