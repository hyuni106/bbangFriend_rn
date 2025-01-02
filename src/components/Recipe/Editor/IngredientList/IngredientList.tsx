import React, { useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import IngredientListHeader from './IngredientListHeader';
import IngredientListItem from './IngredientListItem';

interface IngredientListProps {
  style?: StyleProp<ViewStyle>;
  onUnitSelectPress?: () => void;
}

const IngredientList = (props: IngredientListProps): React.ReactElement => {
  const { style, onUnitSelectPress } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ingredientList, setIngredientList] = useState<string[]>([]);

  return (
    <View style={[styles.root, style]}>
      <IngredientListHeader />
      {ingredientList.map((item, idx) => (
        <IngredientListItem
          key={`ingredient_${idx}`}
          name={item}
          amount=""
          lastValue="g"
          onButtonPress={onUnitSelectPress}
        />
      ))}
      <IngredientListItem
        style={styles.ingredientItem}
        isAddItem
        name=""
        amount=""
        lastValue="g"
        onButtonPress={onUnitSelectPress}
      />
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
