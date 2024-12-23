import React, { PropsWithChildren } from 'react';
import { Text as BaseText, TextProps } from 'react-native';

const Text = (props: PropsWithChildren<TextProps>): React.ReactElement => {
  return (
    <BaseText allowFontScaling={false} {...props}>
      {props.children}
    </BaseText>
  );
};

export default Text;
