import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import HomeMenu from './HomeMenu';
import { BgCalculatorBtn, BgCheckListBtn, BgRecipeBtn } from 'assets/svgs';
import { Colors, Typography } from 'styles';
import { Text } from 'components/common/Base';
import useLoadInitialData from './useLoadInitialData';

const HomeScreen = ({ navigation }: Props<ScreenName.HomeScreen>): React.ReactElement => {
  const { t } = useTranslation();

  useLoadInitialData();

  const menus = [
    {
      title: t('recipe.title'),
      description: t('recipe.desc'),
      SvgBackground: BgRecipeBtn,
      onPress: () => navigation.push(ScreenName.RecipeListScreen),
    },
    {
      title: t('calculator.title'),
      description: t('calculator.desc'),
      SvgBackground: BgCalculatorBtn,
      onPress: () => navigation.push(ScreenName.CalculatorScreen),
    },
    {
      title: t('check_list.title'),
      description: t('check_list.desc'),
      SvgBackground: BgCheckListBtn,
      onPress: () => navigation.push(ScreenName.CheckListScreen),
    },
  ];

  return (
    <View style={styles.root}>
      <View style={styles.menuContainer}>
        <Text style={styles.introMiniText}>{t('home.intro.day_with_oven')}</Text>
        <Text style={styles.introBigText}>{t('home.intro.lets_start')}</Text>

        {menus.map((menu, index) => (
          <HomeMenu
            key={menu.title}
            style={index === 0 ? styles.firstButtonMargin : styles.buttonMargin}
            title={menu.title}
            description={menu.description}
            SvgBackground={menu.SvgBackground}
            onPress={menu.onPress}
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
