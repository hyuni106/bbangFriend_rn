import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { ImgBbangeRound } from 'assets/svgs';
import { Colors } from 'styles';
import useMoveScreen from './useMoveScreen';

const SplashScreen = ({}: Props<ScreenName.SplashScreen>): React.ReactElement => {
  const [splashLaunchedTime] = useState<number>(Date.now());

  useMoveScreen(splashLaunchedTime);

  return (
    <View style={styles.root}>
      <ImgBbangeRound width={180} height={180} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingBottom: 40,
  },
});

export default SplashScreen;
