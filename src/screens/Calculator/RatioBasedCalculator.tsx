import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import RowSuffixInput from 'components/Calculator/RowSuffixInput';
import IngredientList from 'components/Calculator/IngredientList/IngredientList';

interface RatioBasedCalculatorProps {
  style?: StyleProp<ViewStyle>;
}

const RatioBasedCalculator = (props: RatioBasedCalculatorProps): React.ReactElement => {
  const { t } = useTranslation();

  const { style } = props;

  return (
    <ScrollView style={[styles.root, style]}>
      <RowSuffixInput
        placeholder={t('calculator.form.fields.ratio.label')}
        suffix={t('calculator.form.fields.ratio.suffix')}
      />

      <IngredientList style={styles.ingredientListWrapper} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  ingredientListWrapper: {
    marginTop: 24,
  },
});

export default RatioBasedCalculator;
