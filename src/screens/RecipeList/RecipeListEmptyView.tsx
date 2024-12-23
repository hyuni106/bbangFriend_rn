import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Typography } from 'styles';
import { Text } from 'components/common/Base';

interface RecipeListEmptyViewProps {
  style?: StyleProp<ViewStyle>;
}

const RecipeListEmptyView = (props: RecipeListEmptyViewProps): React.ReactElement => {
  const { t } = useTranslation();
  const { style } = props;

  return (
    <View style={[styles.root, style]}>
      <Text style={styles.titleText}>{t('recipe.no_list.message')}</Text>
      <Text style={styles.descText}>{t('recipe.no_list.description')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 120,
  },
  titleText: {
    ...Typography.title_20B,
    color: Colors.gray4,
  },
  descText: {
    ...Typography.title_14B,
    color: Colors.gray4,
    marginTop: 8,
  },
});

export default RecipeListEmptyView;
