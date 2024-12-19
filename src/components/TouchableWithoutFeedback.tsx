import React, { PropsWithChildren, useCallback } from 'react';
import {
  TouchableWithoutFeedback as BaseTouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as BaseTouchableWithoutFeedbackProps,
  GestureResponderEvent,
} from 'react-native';

import { preventDoubleTap } from 'utils/preventDoubleTap';

const TouchableWithoutFeedback = (
  props: PropsWithChildren<BaseTouchableWithoutFeedbackProps>,
): React.ReactElement => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _onPress = useCallback(
    preventDoubleTap((event: GestureResponderEvent): void => {
      props.onPress?.(event);
    }),
    [props.onPress],
  );

  return (
    <BaseTouchableWithoutFeedback {...props} onPress={_onPress}>
      {props.children}
    </BaseTouchableWithoutFeedback>
  );
};

export default TouchableWithoutFeedback;
