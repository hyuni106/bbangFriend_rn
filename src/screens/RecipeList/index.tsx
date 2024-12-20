import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';
import { Colors } from 'styles';
import RecipeListItem from './RecipeListItem';

const RecipeListScreen = ({}: Props<ScreenName.RecipeListScreen>): React.ReactElement => {
  const { t } = useTranslation();

  const renderRecipeListItem = () => {
    return <RecipeListItem />;
  };
  return (
    <View style={styles.root}>
      <BackButtonNavBar title={t('recipe')} />

      <FlatList style={styles.list} data={new Array(3)} renderItem={renderRecipeListItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.gray6,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default RecipeListScreen;
