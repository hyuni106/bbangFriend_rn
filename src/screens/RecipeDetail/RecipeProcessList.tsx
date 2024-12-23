import React from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Typography } from 'styles';

interface RecipeProcessListProps {
  style?: StyleProp<ViewStyle>;
  steps: string[];
}

const RecipeProcessList = (props: RecipeProcessListProps): React.ReactElement => {
  const { t } = useTranslation();
  const { steps } = props;

  return (
    <View style={styles.root}>
      <Text style={styles.labelText}>{t('process')}</Text>

      <View style={styles.rowWrapper}>
        {steps.map((step, idx) => (
          <View key={`step_${idx}`} style={styles.row}>
            <Text style={styles.indexText}>{`${idx + 1}.`}</Text>
            <Text style={styles.processText}>{step}</Text>
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
  indexText: {
    ...Typography.body_14M,
    color: Colors.gray1,
    width: 35,
  },
  processText: {
    ...Typography.body_14M,
    color: Colors.gray1,
    flex: 1,
  },
});

export default RecipeProcessList;
