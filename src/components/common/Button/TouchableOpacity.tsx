import React, { PropsWithChildren, useCallback } from 'react';
import {
  TouchableOpacity as BaseTouchableOpacity,
  TouchableOpacityProps as BaseTouchableOpacityProps,
  GestureResponderEvent,
} from 'react-native';

import { preventDoubleTap } from 'utils/preventDoubleTap';

const TouchableOpacity = (
  props: PropsWithChildren<BaseTouchableOpacityProps>,
): React.ReactElement => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _onPress = useCallback(
    preventDoubleTap((event: GestureResponderEvent): void => {
      props.onPress?.(event);
    }),
    [props.onPress],
  );

  return (
    <BaseTouchableOpacity activeOpacity={0.7} {...props} onPress={_onPress}>
      {props.children}
    </BaseTouchableOpacity>
  );
};

export default TouchableOpacity;
