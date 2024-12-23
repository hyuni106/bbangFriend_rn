import React from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Typography } from 'styles';

// TODO: Ingredient object model 생성 및 연결 예정
interface IngredientListProps {
  style?: StyleProp<ViewStyle>;
  ingredients: string[];
}

const IngredientList = (props: IngredientListProps): React.ReactElement => {
  const { t } = useTranslation();
  const { ingredients } = props;

  return (
    <View style={styles.root}>
      <Text style={styles.labelText}>{t('ingredient')}</Text>

      <View style={styles.rowWrapper}>
        {ingredients.map((item, idx) => (
          <View key={`ingredient_${idx}`} style={styles.row}>
            <Text style={styles.rowText}>{item}</Text>
            <Text style={styles.rowText}>{'0'}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  labelText: {
    ...Typography.body_12M,
    color: Colors.gray1,
  },
  rowWrapper: {
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: Colors.white,
    padding: 16,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    ...Typography.body_14M,
    color: Colors.gray1,
    flex: 1,
  },
});

export default IngredientList;
