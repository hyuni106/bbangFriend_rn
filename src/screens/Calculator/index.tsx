import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SceneRendererProps, NavigationState } from 'react-native-tab-view';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';
import { Colors } from 'styles';
import { TabBar } from 'components/common/Base';
import TabView, { TabRoute } from 'components/common/Base/TabView';
import MaterialBasedCalculator from './MaterialBasedCalculator';
import RatioBasedCalculator from './RatioBasedCalculator';

const CalculatorScreen = ({}: Props<ScreenName.CalculatorScreen>): React.ReactElement => {
  const { t } = useTranslation();
  const [index, setIndex] = React.useState<number>(0);

  const routes: TabRoute[] = [
    { key: 'material_based', title: t('calculator.tab.material_based') },
    { key: 'ratio_based', title: t('calculator.tab.ratio_based') },
  ];

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: NavigationState<TabRoute> },
  ) => <TabBar props={props} activeColor={Colors.blue1} />;

  const renderScene = ({ route }: { route: TabRoute }) => {
    switch (route.key) {
      case 'material_based':
        return <MaterialBasedCalculator style={styles.tabView} />;
      case 'ratio_based':
        return <RatioBasedCalculator style={styles.tabView} />;
      default:
        return <></>;
    }
  };

  return (
    <View style={styles.root}>
      <BackButtonNavBar title={t('calculator.title')} />
      <TabView
        index={index}
        routes={routes}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.gray6,
  },
  tabView: {
    flex: 1,
  },
});

export default CalculatorScreen;
