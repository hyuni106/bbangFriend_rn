import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import HomeMenu from './HomeMenu';
import { BgCalculatorBtn, BgCheckListBtn, BgRecipeBtn } from 'assets/svgs';
import { Colors, Typography } from 'styles';

const HomeScreen = ({}: Props<ScreenName.HomeScreen>): React.ReactElement => {
  const { t } = useTranslation();

  const menus = [
    {
      title: t('recipe'),
      description: t('recipe_desc'),
      SvgBackground: BgRecipeBtn,
    },
    {
      title: t('calculator'),
      description: t('calculator_desc'),
      SvgBackground: BgCalculatorBtn,
    },
    {
      title: t('check_list'),
      description: t('check_list_desc'),
      SvgBackground: BgCheckListBtn,
    },
  ];

  return (
    <View style={styles.root}>
      <View style={styles.menuContainer}>
        <Text style={styles.introMiniText}>{t('home_intro_day_with_oven')}</Text>
        <Text style={styles.introBigText}>{t('home_intro_lets_start')}</Text>

        {menus.map((menu, index) => (
          <HomeMenu
            key={menu.title}
            style={index === 0 ? styles.firstButtonMargin : styles.buttonMargin}
            title={menu.title}
            description={menu.description}
            SvgBackground={menu.SvgBackground}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray6,
    paddingHorizontal: 16,
  },
  menuContainer: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginTop: 24,
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: '100%',
  },
  introMiniText: {
    ...Typography.title_16B,
    color: Colors.gray1,
  },
  introBigText: {
    ...Typography.title_24B,
    color: Colors.gray1,
    marginTop: 4,
  },
  firstButtonMargin: {
    marginTop: 40,
  },
  buttonMargin: {
    marginTop: 16,
  },
});

export default HomeScreen;
