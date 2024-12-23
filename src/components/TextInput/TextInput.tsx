import React, { forwardRef, Ref } from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
  TextInput as BaseTextInput,
  TextInputProps as BaseTextInputProps,
  Text,
  TextStyle,
} from 'react-native';

import { Colors, Typography } from 'styles';

export type TextColorStyle = 'default' | 'error';

export type TextInputRef = BaseTextInput;

export interface TextInputProps
  extends Pick<
    BaseTextInputProps,
    'keyboardType' | 'placeholder' | 'value' | 'maxLength' | 'onChangeText' | 'editable'
  > {
  style?: StyleProp<ViewStyle>;
  textColorStyle?: TextColorStyle;
  textInputStyle?: StyleProp<BaseTextInputProps>;
  suffix?: string;
  suffixTextStyle?: StyleProp<TextStyle>;
}

const TextInput = forwardRef(
  (props: TextInputProps, ref: Ref<TextInputRef>): React.ReactElement => {
    const { style, textColorStyle = 'default', textInputStyle, suffix, suffixTextStyle } = props;

    return (
      <View style={[styles.root, style]}>
        <BaseTextInput
          ref={ref}
          {...props}
          style={[
            styles.textInput,
            {
              borderBottomColor: textColorStyle === 'default' ? Colors.gray1 : Colors.error,
            },
            textInputStyle,
          ]}
          allowFontScaling={false}
          placeholderTextColor={Colors.gray4}
        />
        {suffix && <Text style={[styles.suffixText, suffixTextStyle]}>{suffix}</Text>}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 42,
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    gap: 4,
  },
  textInput: {
    ...Typography.body_14M,
    color: Colors.gray1,
    flex: 1,
    padding: 0,
    includeFontPadding: false,
  },
  suffixText: {
    ...Typography.body_14M,
  },
});

export default TextInput;
