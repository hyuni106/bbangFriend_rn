import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';

import { TouchableOpacity } from 'components/Button';
import { Colors, Typography } from 'styles';

interface IngredientRowProps {
  isEditable?: boolean;
  name: string;
  amount: string;
  isButton?: boolean;
  lastValue: string;
  onButtonPress?: () => void;
}

const IngredientRow = (props: IngredientRowProps): React.ReactElement => {
  const { t } = useTranslation();
  const { isEditable = false, name, amount, isButton = false, lastValue, onButtonPress } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.nameInput}
        editable={isEditable}
        value={name}
        placeholder={t('ingredient_placeholder')}
        placeholderTextColor={Colors.gray4}
      />
      <TextInput
        style={styles.amountInput}
        editable={isEditable}
        value={amount}
        placeholder="0"
        placeholderTextColor={Colors.gray4}
      />
      {isButton ? (
        <TouchableOpacity style={styles.lastValueWrapper} onPress={onButtonPress}>
          <Text style={styles.lastValueButtonText}>{lastValue}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={[styles.lastValueWrapper, styles.staticText]}>{lastValue}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  nameInput: {
    ...Typography.body_14M,
    color: Colors.gray1,
    flex: 2,
  },
  amountInput: {
    ...Typography.body_14M,
    flex: 1,
    color: Colors.gray1,
  },
  lastValueWrapper: {
    flex: 1,
  },
  lastValueButtonText: {
    ...Typography.body_14M,
    color: Colors.gray1,
    textAlign: 'right',
  },
  staticText: {
    ...Typography.body_14M,
    color: Colors.gray1,
  },
});

export default IngredientRow;
