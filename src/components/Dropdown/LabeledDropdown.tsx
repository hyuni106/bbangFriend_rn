import React from 'react';
import { StyleProp, ViewStyle, TextStyle, View, Text, StyleSheet } from 'react-native';
import { Typography, Colors } from 'styles';
import Dropdown, { DropdownProps } from './Dropdown';

interface LabeledDropdownProps<T> extends DropdownProps<T> {
  wrapperStyle?: StyleProp<ViewStyle>;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
}

const LabeledDropdown = <T,>(props: LabeledDropdownProps<T>): React.ReactElement => {
  const { wrapperStyle, label, labelStyle, ...dropdownProps } = props;

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <Dropdown {...dropdownProps} />
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

export default LabeledDropdown;
