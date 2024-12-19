import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navigation from 'navigation/Navigation';
import { StyleSheet } from 'react-native';

const Root = (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default Root;
