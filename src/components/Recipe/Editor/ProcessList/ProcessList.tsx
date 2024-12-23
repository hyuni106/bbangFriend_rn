import React, { useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native';

import { Typography, Colors } from 'styles';
import { useTranslation } from 'react-i18next';
import ProcessListItem from './ProcessListItem';

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
      <Text style={styles.label}>{t('process')}</Text>
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
