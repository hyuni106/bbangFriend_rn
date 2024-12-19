import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { Colors } from 'styles';

const SplashScreen = ({}: Props<ScreenName.SplashScreen>): React.ReactElement => {
  return <View style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

export default SplashScreen;
