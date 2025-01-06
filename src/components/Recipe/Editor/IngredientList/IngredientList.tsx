import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import IngredientListHeader from './IngredientListHeader';
import IngredientListItem from './IngredientListItem';
import { IngredientListState } from 'screens/CreateRecipe';

interface IngredientListProps {
  style?: StyleProp<ViewStyle>;
  ingredients: IngredientListState[];
  handleInputChange?: (index: number, key: 'name' | 'amount', value: string) => void;
  onUnitSelectPress?: (index: number) => void;
}

const IngredientList = (props: IngredientListProps): React.ReactElement => {
  const { style, ingredients, handleInputChange, onUnitSelectPress } = props;

  return (
    <View style={[styles.root, style]}>
      <IngredientListHeader />
      {ingredients.map((item, idx) => (
        <IngredientListItem
          key={`ingredient_${idx}`}
          style={styles.ingredientItem}
          name={item.name}
          amount={`${item.amount}`}
          unit={item.unit}
          onNameChange={text => handleInputChange?.(idx, 'name', text)}
          onAmountChange={text => handleInputChange?.(idx, 'amount', text)}
          onUnitSelectPress={() => onUnitSelectPress?.(idx)}
          isAddItem={idx === ingredients.length - 1}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  ingredientItem: {
    marginTop: 8,
  },
});

export default IngredientList;
