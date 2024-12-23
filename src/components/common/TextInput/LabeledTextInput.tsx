import React from 'react';
import { StyleProp, ViewStyle, TextStyle, View, Text, StyleSheet } from 'react-native';
import { Typography, Colors } from 'styles';
import TextInput, { TextInputProps } from './TextInput';

interface LabeledTextInputProps extends TextInputProps {
  wrapperStyle?: StyleProp<ViewStyle>;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
}

const LabeledTextInput = (props: LabeledTextInputProps): React.ReactElement => {
  const { wrapperStyle, label, labelStyle, ...textInputProps } = props;

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
  },
  label: {
    ...Typography.body_12M,
    color: Colors.gray1,
    marginLeft: 8,
    marginBottom: 8,
  },
});

export default LabeledTextInput;
