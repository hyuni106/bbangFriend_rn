import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Typography } from 'styles';
import { AddButton, RemoveButton } from 'components/common/Button';
import { Text, TouchableOpacity } from 'components/common/Base';

interface IngredientListItemProps {
  style?: StyleProp<ViewStyle>;
  isAddItem?: boolean;
  name: string;
  amount: string;
  lastValue: string;
  onButtonPress?: () => void;
}

const IngredientListItem = (props: IngredientListItemProps): React.ReactElement => {
  const { t } = useTranslation();

  const { style, isAddItem = false, name, amount, lastValue, onButtonPress } = props;

  return (
    <View style={[styles.root, style]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.nameInput}
          value={name}
          placeholder={t('recipe.form.ingredient.fields.name')}
          placeholderTextColor={Colors.gray4}
        />
        <TextInput
          style={styles.amountInput}
          value={amount}
          placeholder="0"
          placeholderTextColor={Colors.gray4}
        />
        <TouchableOpacity style={styles.ingredientTextWrapper} onPress={onButtonPress}>
          <Text style={styles.ingredientText}>{lastValue}</Text>
        </TouchableOpacity>
      </View>
      {isAddItem ? <AddButton color={Colors.red1} /> : <RemoveButton color={Colors.red1} />}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputContainer: {
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
  ingredientTextWrapper: {
    flex: 1,
  },
  ingredientText: {
    ...Typography.body_14M,
    color: Colors.gray1,
    textAlign: 'right',
  },
});

export default IngredientListItem;
