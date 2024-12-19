import React from 'react';
import { SafeAreaView } from 'react-native';

import Navigation from 'navigation/Navigation';

const Root = (): React.ReactElement => {
  return (
    <SafeAreaView>
      <Navigation />
    </SafeAreaView>
  );
};

export default Root;
