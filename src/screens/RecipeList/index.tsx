import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';

const RecipeListScreen = ({}: Props<ScreenName.RecipeListScreen>): React.ReactElement => {
  return (
    <View style={styles.root}>
      <BackButtonNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default RecipeListScreen;
