import React, { memo } from 'react';
import Animated, { useAnimatedProps, interpolateColor, SharedValue } from 'react-native-reanimated';
import { Rect } from 'react-native-svg';

import { Colors } from 'styles';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

interface AnimatedBoxProps {
  size: number;
  progress: SharedValue<number>;
  highlightColor?: string;
  unCheckedBackgroundColor?: string;
}

const AnimatedBox = memo((props: AnimatedBoxProps): React.ReactElement => {
  const {
    size,
    progress,
    highlightColor = Colors.gray1,
    unCheckedBackgroundColor = Colors.white,
  } = props;

  const animatedBoxProps = useAnimatedProps(() => {
    const fill = interpolateColor(
      progress.value,
      [0, 1],
      [unCheckedBackgroundColor, highlightColor],
    );
    const stroke = interpolateColor(progress.value, [0, 1], [highlightColor, highlightColor]);
    return { fill, stroke };
  });

  return (
    <AnimatedRect
      animatedProps={animatedBoxProps}
      x="2"
      y="2"
      width={size - 4}
      height={size - 4}
      rx={size / 4}
      ry={size / 4}
      strokeWidth={2}
    />
  );
});

export default AnimatedBox;
