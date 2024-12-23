import React, { useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Typography, Colors } from 'styles';
import ProcessListItem from './ProcessListItem';
import { Text } from 'components/common/Base';

interface ProcessListProps {
  style?: StyleProp<ViewStyle>;
}

const ProcessList = (props: ProcessListProps): React.ReactElement => {
  const { t } = useTranslation();

  const { style } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [processList, setProcessList] = useState<string[]>([]);

  return (
    <View style={[styles.root, style]}>
      <Text style={styles.label}>{t('recipe.form.process.label')}</Text>
      {processList.map((item, idx) => (
        <ProcessListItem key={`process_${idx}`} index={idx + 1} process={item} />
      ))}
      <ProcessListItem
        style={styles.processItem}
        isAddItem
        index={processList.length + 1}
        process={''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  label: {
    ...Typography.body_12M,
    color: Colors.gray1,
    marginBottom: 8,
  },
  processItem: {
    marginTop: 8,
  },
});

export default ProcessList;
