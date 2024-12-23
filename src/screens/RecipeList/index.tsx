import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';
import { Colors } from 'styles';
import RecipeListHeader from './RecipeListHeader';
import { RecipeFilterType } from 'models';
import RecipeListEmptyView from './RecipeListEmptyView';
import FloatingButton from './FloatingButton';
import RecipeSummary from 'components/Recipe/RecipeSummary';

const RecipeListScreen = ({
  navigation,
}: Props<ScreenName.RecipeListScreen>): React.ReactElement => {
  const { t } = useTranslation();

  const [filterType, setFilterType] = useState<RecipeFilterType>(RecipeFilterType.ALL);

  const onFilterPress = (type: RecipeFilterType) => {
    setFilterType(type);
  };

  const onCreateRecipePress = () => {
    navigation.push(ScreenName.CreateRecipeScreen);
  };

  const onRecipeItemPress = () => {
    navigation.push(ScreenName.RecipeDetailScreen);
  };

  const renderRecipeListItem = () => {
    return <RecipeSummary style={styles.listItemWrapper} onItemPress={onRecipeItemPress} />;
  };

  const listHeaderComponent = () => {
    return (
      <RecipeListHeader
        style={styles.header}
        selectedFilter={filterType}
        onItemPress={onFilterPress}
      />
    );
  };

  const listEmptyComponent = () => {
    return <RecipeListEmptyView />;
  };

  return (
    <View style={styles.root}>
      <BackButtonNavBar title={t('recipe.title')} />

      <FlatList
        style={styles.list}
        data={new Array(3)}
        renderItem={renderRecipeListItem}
        ListHeaderComponent={listHeaderComponent}
        ListEmptyComponent={listEmptyComponent}
      />

      <FloatingButton style={styles.floatingButton} onPress={onCreateRecipePress} />
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
  header: {
    marginTop: 20,
  },
  listItemWrapper: {
    marginTop: 20,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
});

export default RecipeListScreen;
