import React, { forwardRef, Ref, useCallback, useImperativeHandle } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useImmer } from 'use-immer';
import { useTranslation } from 'react-i18next';

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
  onUnitSelectPress?: () => void;
}

const IngredientList = forwardRef(
  (props: IngredientListProps, ref: Ref<IngredientListRef>): React.ReactElement => {
    const { t } = useTranslation();
    const { style, onUnitSelectPress } = props;

    const [ingredientList, setIngredientList] = useImmer<IngredientListState[]>([]);

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
            name={item.name}
            amount={`${item.amount}`}
            lastValue={t(`${item.unit.key}`)}
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
