import React from 'react';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { Circle, G, Line, Svg } from 'react-native-svg';

import { Colors } from 'styles';
import { TouchableOpacity } from 'components/common/Base';

interface FloatingButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const BUTTON_SIZE = 60;
const LINE_WIDTH = 14;
const LINE_STROKE = 4;

const FloatingButton = (props: FloatingButtonProps): React.ReactElement => {
  const { style, onPress } = props;

  return (
    <TouchableOpacity style={[styles.root, style]} onPress={onPress}>
      <Svg width={BUTTON_SIZE} height={BUTTON_SIZE}>
        <G transform={`translate(${BUTTON_SIZE / 2}, ${BUTTON_SIZE / 2})`}>
          <Circle r={BUTTON_SIZE / 2} fill={Colors.red1} />
          <Line
            x1={`-${LINE_WIDTH}`}
            y1="0"
            x2={LINE_WIDTH}
            y2="0"
            stroke={Colors.white}
            strokeWidth={LINE_STROKE}
            strokeLinecap="round"
          />
          <Line
            x1="0"
            y1={`-${LINE_WIDTH}`}
            x2="0"
            y2={LINE_WIDTH}
            stroke={Colors.white}
            strokeWidth={LINE_STROKE}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FloatingButton;
