import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import { LabeledTextInput } from 'components/common/TextInput';
import { LabeledDropdown } from 'components/Dropdown';

interface RecipeInputsProps {
  style?: StyleProp<ViewStyle>;
}

const RecipeInputs = ({}: RecipeInputsProps): React.ReactElement => {
  const { t } = useTranslation();

  const categoryOptions = [t('recipe.tags.pastry'), t('recipe.tags.bread')];

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <LabeledDropdown
          wrapperStyle={styles.flex1}
          label={t('recipe.form.category.label')}
          optionList={categoryOptions}
          placeholder={t('recipe.form.category.placeholder')}
        />
        <LabeledTextInput
          wrapperStyle={styles.flex1_5}
          value=""
          label={t('recipe.form.name.label')}
          placeholder={t('recipe.form.name.placeholder')}
        />
      </View>

      <LabeledTextInput
        value=""
        label={t('recipe.form.description.label')}
        placeholder={t('recipe.form.description.placeholder')}
      />

      <LabeledTextInput
        value=""
        label={t('recipe.form.source.label')}
        placeholder={t('recipe.form.source.placeholder')}
      />

      <View style={styles.inputContainer}>
        <LabeledTextInput
          wrapperStyle={styles.flex1}
          textInputStyle={styles.textAlignRight}
          value=""
          label={t('recipe.form.oven.temperature.label')}
          suffix={t('recipe.form.oven.temperature.unit')}
          placeholder="0"
        />
        <LabeledTextInput
          wrapperStyle={styles.flex1}
          textInputStyle={styles.textAlignRight}
          value=""
          label={t('recipe.form.oven.time.label')}
          suffix={t('recipe.form.oven.time.unit')}
          placeholder="0"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    gap: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  textAlignRight: {
    textAlign: 'right',
  },
  flex1: {
    flex: 1,
  },
  flex1_5: {
    flex: 1.5,
  },
});

export default RecipeInputs;
