import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import { Colors, Typography } from 'styles';

interface LabeledTextBoxProps {
  style?: StyleProp<ViewStyle>;
  label: string;
  value: string;
  align?: 'left' | 'right' | 'center';
  isLink?: boolean;
  onPressLink?: () => void;
}

const LabeledTextBox = (props: LabeledTextBoxProps): React.ReactElement => {
  const { style, label, value, isLink = false, align = 'left', onPressLink } = props;

  return (
    <View style={[styles.root, style]}>
      <Text style={styles.labelText}>{label}</Text>

      <View style={styles.contentWrapper}>
        {isLink ? (
          <TouchableOpacity onPress={onPressLink}>
            <Text style={[styles.linkText, { textAlign: align }]}>{value}</Text>
          </TouchableOpacity>
        ) : (
          <Text style={[styles.valueText, { textAlign: align }]}>{value}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 16,
  },
  labelText: {
    ...Typography.body_12M,
    color: Colors.gray1,
    marginBottom: 4,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    marginTop: 8,
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  valueText: {
    flex: 1,
    ...Typography.body_14M,
    color: Colors.gray1,
  },
  linkText: {
    ...Typography.body_14M,
    color: Colors.blue_link,
    textDecorationLine: 'underline',
  },
});

export default LabeledTextBox;
