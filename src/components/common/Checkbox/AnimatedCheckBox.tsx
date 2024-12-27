import React, { memo, useEffect } from 'react';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { Svg } from 'react-native-svg';

import AnimatedCheckMarkPath from './AnimatedCheckMarkPath';
import AnimatedBox from './AnimatedBox';
import { TouchableWithoutFeedback } from '../Base';

interface AnimatedCheckBoxProps {
  isChecked: boolean;
  size?: number;
  highlightColor?: string;
  onPress?: () => void;
}

const AnimatedCheckBox = memo((props: AnimatedCheckBoxProps): React.ReactElement => {
  const { isChecked, highlightColor, size = 50, onPress } = props;

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(isChecked ? 1 : 0, { duration: 500 });
  }, [isChecked, progress]);

  const checkMarkScale = size / 50;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <AnimatedBox size={size} progress={progress} highlightColor={highlightColor} />
        <AnimatedCheckMarkPath progress={progress} scale={checkMarkScale} />
      </Svg>
    </TouchableWithoutFeedback>
  );
});

export default AnimatedCheckBox;
