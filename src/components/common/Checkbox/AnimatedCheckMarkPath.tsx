import React, { memo } from 'react';
import Animated, { SharedValue, useAnimatedProps } from 'react-native-reanimated';
import { Path } from 'react-native-svg';
import { Colors } from 'styles';
import { svgPathProperties } from 'svg-path-properties';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface AnimatedCheckMarkPathProps {
  progress: SharedValue<number>;
  scale: number;
  pathColor?: string;
}

const AnimatedCheckMarkPath = memo((props: AnimatedCheckMarkPathProps): React.ReactElement => {
  const { progress, scale, pathColor = Colors.white } = props;

  const pathData = 'M12 24.4068L20.6667 32.9999L36.5 17.1667';
  const properties = new svgPathProperties(pathData);
  const pathLength = properties.getTotalLength() + 1;

  const checkMarkAnimation = useAnimatedProps(() => {
    const strokeDashoffset = pathLength - pathLength * progress.value;
    const fillOpacity = progress.value;
    return { strokeDashoffset, fillOpacity };
  });

  return (
    <AnimatedPath
      animatedProps={checkMarkAnimation}
      d={pathData}
      stroke={pathColor}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={pathLength}
      transform={`scale(${scale})`}
      fill="none"
    />
  );
});

export default AnimatedCheckMarkPath;
