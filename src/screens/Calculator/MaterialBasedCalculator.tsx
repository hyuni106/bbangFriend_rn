import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Typography } from 'styles';
import RowSuffixInput from 'components/Calculator/RowSuffixInput';
import { Text } from 'components/common/Base';
import IngredientList from 'components/Calculator/IngredientList/IngredientList';

interface MaterialBasedCalculatorProps {
  style?: StyleProp<ViewStyle>;
}

const MaterialBasedCalculator = (props: MaterialBasedCalculatorProps): React.ReactElement => {
  const { t } = useTranslation();

  const { style } = props;

  return (
    <ScrollView style={[styles.root, style]}>
      <RowSuffixInput
        placeholder={t('calculator.form.fields.name.label')}
        suffix={t('calculator.form.fields.name.suffix')}
      />
      <RowSuffixInput
        style={styles.amountInputWrapper}
        placeholder={t('calculator.form.fields.amount.label')}
        suffix={t('calculator.form.fields.amount.suffix')}
      />
      <Text style={styles.useNoteText}>{t('calculator.form.note')}</Text>

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
  amountInputWrapper: {
    marginTop: 8,
  },
  useNoteText: {
    ...Typography.body_12M,
    color: Colors.gray3,
    textAlign: 'right',
    marginTop: 12,
    lineHeight: 20,
  },
  ingredientListWrapper: {
    marginTop: 24,
  },
});

export default MaterialBasedCalculator;
