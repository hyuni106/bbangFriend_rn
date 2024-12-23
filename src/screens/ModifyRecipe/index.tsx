import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';

const ModifyRecipeScreen = ({}: Props<ScreenName.ModifyRecipeScreen>): React.ReactElement => {
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
  },
});

export default ModifyRecipeScreen;
