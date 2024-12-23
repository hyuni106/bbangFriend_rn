import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';
import { Colors } from 'styles';
import { LabeledTextInput } from 'components/TextInput';
import { LabeledDropdown } from 'components/Dropdown';
import IngredientList from './IngredientList/IngredientList';
import ProcessList from './ProcessList/ProcessList';
import { SingleButton } from 'components/Button';

const CreateRecipeScreen = ({}: Props<ScreenName.CreateRecipeScreen>): React.ReactElement => {
  const { t } = useTranslation();

  const categoryOptions = [t('category_pastry'), t('category_bread')];

  return (
    <View style={styles.root}>
      <BackButtonNavBar title={t('recipe_add')} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.inputContainer}>
          <LabeledDropdown
            wrapperStyle={flexStyles.flex1}
            label={t('category')}
            optionList={categoryOptions}
            placeholder={t('recipe_category_placeholder')}
          />
          <LabeledTextInput
            wrapperStyle={flexStyles.flex1_5}
            value=""
            label={t('name')}
            placeholder={t('name_placeholder')}
          />
        </View>

        <LabeledTextInput
          value=""
          label={t('description')}
          placeholder={t('description_placeholder')}
        />

        <LabeledTextInput value="" label={t('source')} placeholder={t('source_placeholder')} />

        <View style={styles.inputContainer}>
          <LabeledTextInput
            wrapperStyle={flexStyles.flex1}
            textInputStyle={styles.textAlignRight}
            value=""
            label={t('oven_temperature')}
            suffix={t('temperature')}
            placeholder="0"
          />
          <LabeledTextInput
            wrapperStyle={flexStyles.flex1}
            textInputStyle={styles.textAlignRight}
            value=""
            label={t('oven_time')}
            suffix={t('minute')}
            placeholder="0"
          />
        </View>

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

const flexStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex1_5: {
    flex: 1.5,
  },
});

const styles = StyleSheet.create({
  root: {
    ...flexStyles.flex1,
    flexDirection: 'column',
    backgroundColor: Colors.gray6,
  },
  scrollView: {
    ...flexStyles.flex1,
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 80,
    paddingLeft: 16,
    paddingRight: 24,
    gap: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  textAlignRight: {
    textAlign: 'right',
  },
  button: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 32,
  },
});

export default CreateRecipeScreen;
