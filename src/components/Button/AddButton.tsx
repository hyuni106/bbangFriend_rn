import React from 'react';
import { ColorValue, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import TouchableOpacity from './TouchableOpacity';
import { Colors } from 'styles';
import Svg, { G, Line, Rect } from 'react-native-svg';

const BUTTON_SIZE = 20;
const LINE_STROKE = 2;

interface AddButtonProps {
  style?: StyleProp<ViewStyle>;
  buttonSize?: number;
  color?: ColorValue;
  onPress?: () => void;
}

const AddButton = (props: AddButtonProps): React.ReactElement => {
  const { buttonSize = BUTTON_SIZE, color = Colors.gray3, onPress } = props;

  const containerSize = buttonSize + LINE_STROKE * 2;
  const LINE_WIDTH = containerSize / 2 - 6;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Svg width={containerSize} height={containerSize}>
        <Rect
          x={LINE_STROKE}
          y={LINE_STROKE}
          width={buttonSize}
          height={buttonSize}
          fill={Colors.transparent}
          stroke={color}
          strokeWidth={LINE_STROKE}
          rx={4}
        />
        <G transform={`translate(${containerSize / 2}, ${containerSize / 2})`}>
          <Line
            x1={`-${LINE_WIDTH}`}
            y1="0"
            x2={LINE_WIDTH}
            y2="0"
            stroke={color}
            strokeWidth={LINE_STROKE}
            strokeLinecap="round"
          />
          <Line
            x1="0"
            y1={`-${LINE_WIDTH}`}
            x2="0"
            y2={LINE_WIDTH}
            stroke={color}
            strokeWidth={LINE_STROKE}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddButton;
