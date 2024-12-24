import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

import { Text } from 'components/common/Base';
import { TextInput } from 'components/common/TextInput';
import { Colors, Typography } from 'styles';

interface RowSuffixInputProps {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  suffixStyle?: StyleProp<TextStyle>;
  suffix: string;
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

const RowSuffixInput = (props: RowSuffixInputProps): React.ReactElement => {
  const { style, suffixStyle, inputStyle, suffix, value, placeholder, onChangeText } = props;

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[styles.input, inputStyle]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <Text style={[styles.suffix, suffixStyle]}>{suffix}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    width: 150,
  },
  suffix: {
    ...Typography.body_16M,
    color: Colors.gray1,
    flex: 1,
  },
});

export default RowSuffixInput;
