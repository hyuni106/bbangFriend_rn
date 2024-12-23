import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';
import { Colors } from 'styles';
import RecipeListItem from './RecipeListItem';
import RecipeListHeader from './RecipeListHeader';
import { RecipeFilterType } from 'models';
import RecipeListEmptyView from './RecipeListEmptyView';
import FloatingButton from './FloatingButton';

const RecipeListScreen = ({
  navigation,
}: Props<ScreenName.RecipeListScreen>): React.ReactElement => {
  const { t } = useTranslation();

  const [filterType, setFilterType] = useState<RecipeFilterType>(RecipeFilterType.ALL);

  const renderRecipeListItem = () => {
    return <RecipeListItem />;
  };

  const onFilterPress = (type: RecipeFilterType) => {
    setFilterType(type);
  };

  const onCreateRecipePress = () => {
    navigation.push(ScreenName.CreateRecipeScreen);
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
      <BackButtonNavBar title={t('recipe')} />

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
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
});

export default RecipeListScreen;
