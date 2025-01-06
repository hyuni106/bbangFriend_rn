import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';
import { Colors } from 'styles';
import { SingleButton } from 'components/common/Button';
import { ProcessList, RecipeInputs } from 'components/Recipe/Editor';
import SelectUnitPopupWrapper, { SelectUnitPopupWrapperRef } from './SelectUnitPopupWrapper';
import { RootState } from 'features';
import IngredientList from 'components/Recipe/Editor/IngredientList/IngredientList';
import { IngredientUnit } from 'models';
import { useImmer } from 'use-immer';

export interface IngredientListState {
  name: string;
  amount: string;
  unit: IngredientUnit;
}

const CreateRecipeScreen = ({}: Props<ScreenName.CreateRecipeScreen>): React.ReactElement => {
  const { t } = useTranslation();

  const selectUnitPopupWrapperRef = useRef<SelectUnitPopupWrapperRef>(null);

  const unitList = useSelector((state: RootState) => state.units.unitList);

  const [ingredientList, setIngredientList] = useImmer<IngredientListState[]>([
    { name: '', amount: '', unit: unitList[0] },
  ]);

  const handleInputChange = (index: number, key: 'name' | 'amount', value: string) => {
    setIngredientList(draft => {
      draft[index][key] = value;
    });
  };

  };

  return (
    <View style={styles.root}>
      <BackButtonNavBar title={t('recipe.add')} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
        <RecipeInputs />
        <IngredientList
          ingredients={ingredientList}
          handleInputChange={handleInputChange}
          onUnitSelectPress={onUnitSelectPress}
        />
        <ProcessList />
      </ScrollView>

      <SingleButton
        style={styles.button}
        defaultColor={Colors.red1}
        pressedColor={Colors.red2}
        title={t('button.add')}
      />

      <SelectUnitPopupWrapper ref={selectUnitPopupWrapperRef} units={unitList} />
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
