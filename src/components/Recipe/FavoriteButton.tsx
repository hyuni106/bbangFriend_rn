import { IcStarActive, IcStarDefault } from 'assets/svgs';
import { TouchableWithoutFeedback } from 'components/common/Button';
import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

const ANGLE = 5;
const TIME = 80;
const EASING = Easing.elastic(1.5);

interface FavoriteButtonProps {
  style?: StyleProp<ViewStyle>;
  isActive: boolean;
}

const FavoriteButton = (props: FavoriteButtonProps) => {
  const { style, isActive } = props;

  const rotation = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  const handlePress = () => {
    rotation.value = withSequence(
      withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
      withRepeat(
        withTiming(ANGLE, {
          duration: TIME,
          easing: EASING,
        }),
        3,
        true,
      ),
      withTiming(0, { duration: TIME / 2, easing: EASING }),
    );
  };

  return (
    <TouchableWithoutFeedback style={[styles.container, style]} onPress={handlePress}>
      <Animated.View style={animatedStyle}>
        {isActive ? <IcStarActive /> : <IcStarDefault />}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoriteButton;
