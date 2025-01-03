import React from 'react';
import { StyleProp, ViewStyle, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Typography, Colors } from 'styles';
import { Text } from 'components/common/Base';

interface IngredientListHeaderProps {
  style?: StyleProp<ViewStyle>;
}

const IngredientListHeader = (props: IngredientListHeaderProps): React.ReactElement => {
  const { t } = useTranslation();
  const { style } = props;

  return (
    <View style={[styles.root, style]}>
      <Text style={styles.label}>{t('recipe.form.ingredient.label')}</Text>

      <View style={styles.subLabelContainer}>
        <Text style={[styles.label, styles.flex2]}>{t('recipe.form.ingredient.fields.name')}</Text>
        <Text style={[styles.label, styles.flex1]}>
          {t('recipe.form.ingredient.fields.amount')}
        </Text>
        <Text style={[styles.label, styles.flex1]}>{t('recipe.form.ingredient.fields.unit')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  label: {
    ...Typography.body_12M,
    color: Colors.gray1,
  },
  subLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 40,
  },
  flex2: {
    flex: 2,
  },
  flex1: {
    flex: 1,
  },
});

export default IngredientListHeader;
