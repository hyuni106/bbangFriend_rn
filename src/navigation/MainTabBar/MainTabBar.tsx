import React, { useMemo } from 'react';
import { View, StyleSheet, useWindowDimensions, ScaledSize } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Colors } from 'styles';
import { IcHomeDefault, IcHomeActive, IcSettingDefault, IcSettingActive } from 'assets/svgs';
import MainTabBarItem from './MainTabBarItem';
import { ScreenName } from 'navigation/ScreenNames';
import { useTranslation } from 'react-i18next';

const HOME_TAB_INDEX = 0;
const SETTING_TAB_INDEX = 1;

type MainTabBarProps = BottomTabBarProps;

const MainTabBar = (props: MainTabBarProps): React.ReactElement => {
  const { t } = useTranslation();
  const window = useWindowDimensions();
  const styles = useMemo(() => createStyles(window), [window]);

  const { navigation, state } = props;
  const { index } = state;

  return (
    <View style={styles.root}>
      <View style={styles.itemContainer}>
        <MainTabBarItem
          normalIcon={IcHomeDefault}
          selectedIcon={IcHomeActive}
          title={t('home.title')}
          isSelected={index === HOME_TAB_INDEX}
          onPress={() => navigation.navigate(ScreenName.HomeScreen)}
        />
        <MainTabBarItem
          normalIcon={IcSettingDefault}
          selectedIcon={IcSettingActive}
          title={t('setting.title')}
          isSelected={index === SETTING_TAB_INDEX}
          onPress={() => navigation.navigate(ScreenName.SettingScreen)}
        />
      </View>
    </View>
  );
};

const mainTabBarHeight = 60;

const createStyles = (scaledSize: ScaledSize) => {
  return StyleSheet.create({
    root: {
      width: scaledSize.width,
      height: mainTabBarHeight,
      borderTopColor: Colors.gray5,
      borderTopWidth: 1,
      backgroundColor: Colors.white,
    },
    itemContainer: {
      flexDirection: 'row',
      height: mainTabBarHeight,
      paddingHorizontal: 12,
    },
  });
};

export default MainTabBar;
