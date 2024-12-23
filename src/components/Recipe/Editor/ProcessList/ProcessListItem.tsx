import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Text, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Typography } from 'styles';
import { AddButton, RemoveButton } from 'components/Button';

interface ProcessListItemProps {
  style?: StyleProp<ViewStyle>;
  isAddItem?: boolean;
  index: number;
  process: string;
}

const ProcessListItem = (props: ProcessListItemProps): React.ReactElement => {
  const { t } = useTranslation();
  const { style, isAddItem = false, index, process } = props;

  return (
    <View style={[styles.root, style]}>
      <View style={styles.inputContainer}>
        <Text style={styles.indexText}>{`${index}.`}</Text>
        <TextInput
          style={styles.input}
          value={process}
          placeholder={t('recipe.form.process.placeholder')}
          placeholderTextColor={Colors.gray4}
        />
      </View>
      {isAddItem ? <AddButton color={Colors.red1} /> : <RemoveButton color={Colors.red1} />}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 42,
    gap: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 42,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  indexText: {
    ...Typography.body_14M,
    color: Colors.gray1,
    width: 30,
    marginTop: 3,
  },
  input: {
    ...Typography.body_14M,
    flex: 1,
    color: Colors.gray1,
  },
});

export default ProcessListItem;
