import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import LabeledTextBox from 'components/common/LabeledTextBox';

interface RecipeInfoGroupProps {
  style?: StyleProp<ViewStyle>;
  source: string;
  ovenTemperature: string;
  ovenTime: string;
}

const RecipeInfoGroup = (props: RecipeInfoGroupProps): React.ReactElement => {
  const { t } = useTranslation();
  const { source, ovenTemperature, ovenTime } = props;

  return (
    <View style={styles.root}>
      <LabeledTextBox label={t('recipe.form.source.label')} value={source} isLink={true} />
      <View style={styles.rowContainer}>
        <LabeledTextBox
          style={styles.flex}
          label={t('recipe.form.oven.temperature.label')}
          align="right"
          value={ovenTemperature}
        />
        <LabeledTextBox
          style={styles.flex}
          label={t('recipe.form.oven.time.label')}
          align="right"
          value={ovenTime}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 16,
  },
  flex: {
    flex: 1,
  },
});

export default RecipeInfoGroup;
