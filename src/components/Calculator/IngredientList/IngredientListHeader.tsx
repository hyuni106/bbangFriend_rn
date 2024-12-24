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
      <Text style={[styles.label, styles.flex2]}>{t('calculator.table.headers.material')}</Text>
      <Text style={[styles.label, styles.flex1]}>
        {t('calculator.table.headers.before_conversion')}
      </Text>
      <Text style={[styles.label, styles.flex1]}>
        {t('calculator.table.headers.after_conversion')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 40,
  },
  label: {
    ...Typography.body_12M,
    color: Colors.gray1,
  },
  flex2: {
    flex: 2,
  },
  flex1: {
    flex: 1,
  },
});

export default IngredientListHeader;
