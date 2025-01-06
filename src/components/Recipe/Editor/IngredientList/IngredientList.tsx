import React, { forwardRef, Ref, useCallback, useImperativeHandle } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useImmer } from 'use-immer';

import IngredientListHeader from './IngredientListHeader';
import IngredientListItem from './IngredientListItem';
import { IngredientUnit } from 'models';

export interface IngredientListRef {
  selectedIngredientUnit?: (idx: number, unit: IngredientUnit) => void;
}

interface IngredientListState {
  name: string;
  amount: number;
  unit: IngredientUnit;
}

interface IngredientListProps {
  style?: StyleProp<ViewStyle>;
  unitList: IngredientUnit[];
  onUnitSelectPress?: () => void;
}

const IngredientList = forwardRef(
  (props: IngredientListProps, ref: Ref<IngredientListRef>): React.ReactElement => {
    const { style, unitList, onUnitSelectPress } = props;

    const [ingredientList, setIngredientList] = useImmer<IngredientListState[]>([
      { name: '', amount: 0, unit: unitList[0] },
    ]);

    const selectedIngredientUnit = useCallback(
      (idx: number, unit: IngredientUnit) => {
        setIngredientList(draft => {
          draft[idx].unit = unit;
        });
      },
      [setIngredientList],
    );

    useImperativeHandle(ref, () => ({ selectedIngredientUnit }), [selectedIngredientUnit]);

    return (
      <View style={[styles.root, style]}>
        <IngredientListHeader />
        {ingredientList.map((item, idx) => (
          <IngredientListItem
            key={`ingredient_${idx}`}
            style={styles.ingredientItem}
            name={item.name}
            amount={`${item.amount}`}
            unit={item.unit}
            onUnitSelectPress={onUnitSelectPress}
            isAddItem={idx === ingredientList.length - 1}
          />
        ))}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  ingredientItem: {
    marginTop: 8,
  },
});

export default IngredientList;
