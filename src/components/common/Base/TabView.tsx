import React from 'react';
import { useWindowDimensions } from 'react-native';
import {
  TabView as BaseTabView,
  SceneRendererProps,
  NavigationState,
  Route,
} from 'react-native-tab-view';

export interface TabRoute extends Route {
  key: string;
  title: string;
}

interface TabViewProps<T extends TabRoute> {
  index: number;
  routes: T[];
  renderTabBar: (
    props: SceneRendererProps & { navigationState: NavigationState<T> },
  ) => React.ReactElement;
  renderScene: (props: { route: T }) => React.ReactElement | null;
  onIndexChange: (index: number) => void;
}

const TabView = <T extends TabRoute>({
  index,
  routes,
  renderTabBar,
  renderScene,
  onIndexChange,
}: TabViewProps<T>): React.ReactElement => {
  const layout = useWindowDimensions();

  return (
    <BaseTabView
      navigationState={{ index, routes }}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={onIndexChange}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default TabView;
