import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';
import { Colors } from 'styles';
import { SingleButton } from 'components/Button';
import { IngredientList, ProcessList, RecipeInputs } from 'components/Recipe/Editor';

const CreateRecipeScreen = ({}: Props<ScreenName.CreateRecipeScreen>): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <View style={styles.root}>
      <BackButtonNavBar title={t('recipe_add')} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
        <RecipeInputs />
        <IngredientList />
        <ProcessList />
      </ScrollView>

      <SingleButton
        style={styles.button}
        defaultColor={Colors.red1}
        pressedColor={Colors.red2}
        title={t('add_button')}
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
  scrollView: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 80,
    paddingLeft: 16,
    paddingRight: 24,
    gap: 20,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 32,
  },
});

export default CreateRecipeScreen;
