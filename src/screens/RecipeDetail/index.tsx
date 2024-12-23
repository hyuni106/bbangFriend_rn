import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';
import { Colors } from 'styles';
import RecipeSummary from 'components/Recipe/RecipeSummary';
import RecipeInfoGroup from './RecipeInfoGroup/RecipeInfoGroup';
import IngredientList from './IngredientList';
import RecipeStepList from './RecipeProcessList';
import { DoubleButton } from 'components/common/Button';

const RecipeDetailScreen = ({
  navigation,
}: Props<ScreenName.RecipeDetailScreen>): React.ReactElement => {
  const { t } = useTranslation();

  const onModifyPress = () => {
    navigation.push(ScreenName.ModifyRecipeScreen);
  };

  return (
    <View style={styles.root}>
      <BackButtonNavBar title={t('recipe.detail')} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
        <RecipeSummary />
        <RecipeInfoGroup source={'https://link'} ovenTemperature={'0'} ovenTime={'0'} />
        <IngredientList ingredients={['밀가루', '설탕']} />
        <RecipeStepList steps={['재료넣기', '반죽하기']} />

        <DoubleButton
          style={styles.buttonWrapper}
          leftButton={{
            title: t('button.delete'),
            defaultColor: Colors.gray4,
            pressedColor: Colors.gray3,
          }}
          rightButton={{
            title: t('button.modify'),
            defaultColor: Colors.red1,
            pressedColor: Colors.red2,
            onPress: onModifyPress,
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.gray6,
  },
  scrollView: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingLeft: 16,
    paddingRight: 24,
    gap: 20,
  },
  buttonWrapper: {
    marginTop: 20,
  },
});

export default RecipeDetailScreen;
