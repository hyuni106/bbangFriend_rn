import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import HomeMenu from './HomeMenu';
import { BgCalculatorBtn, BgCheckListBtn, BgRecipeBtn } from 'assets/svgs';
import { Colors } from 'styles';

const HomeScreen = ({}: Props<ScreenName.HomeScreen>): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <View style={styles.root}>
      <View style={styles.menuContainer}>
        <HomeMenu title={t('recipe')} description={t('recipe_desc')} SvgBackground={BgRecipeBtn} />
        <HomeMenu
          style={styles.buttonMargin}
          title={t('calculator')}
          description={t('calculator_desc')}
          SvgBackground={BgCalculatorBtn}
        />
        <HomeMenu
          style={styles.buttonMargin}
          title={t('check_list')}
          description={t('check_list_desc')}
          SvgBackground={BgCheckListBtn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
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
  buttonMargin: {
    marginTop: 16,
  },
});

export default HomeScreen;
