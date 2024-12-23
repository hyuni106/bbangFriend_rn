import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { Colors } from 'styles';
import IngredientRow from 'components/common/IngredientRow';
import { AddButton, RemoveButton } from 'components/Button';

interface IngredientListItemProps {
  style?: StyleProp<ViewStyle>;
  isAddItem?: boolean;
  name: string;
  amount: string;
  lastValue: string;
  onButtonPress?: () => void;
}

const IngredientListItem = (props: IngredientListItemProps): React.ReactElement => {
  const { style, isAddItem = false, name, amount, lastValue, onButtonPress } = props;

  return (
    <View style={[styles.root, style]}>
      <IngredientRow
        isEditable={true}
        isButton={true}
        name={name}
        amount={amount}
        lastValue={lastValue}
        onButtonPress={onButtonPress}
      />
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
});

export default IngredientListItem;
