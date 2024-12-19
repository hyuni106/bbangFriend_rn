import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';

const SettingScreen = ({}: Props<ScreenName.SettingScreen>): React.ReactElement => {
  return <View style={styles.root}>{/* TODO: 화면 추가 예정 */}</View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;
