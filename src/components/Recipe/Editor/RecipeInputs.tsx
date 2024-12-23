import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import { LabeledTextInput } from 'components/TextInput';
import { LabeledDropdown } from 'components/Dropdown';

interface RecipeInputsProps {
  style?: StyleProp<ViewStyle>;
}

const RecipeInputs = ({}: RecipeInputsProps): React.ReactElement => {
  const { t } = useTranslation();

  const categoryOptions = [t('category_pastry'), t('category_bread')];

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <LabeledDropdown
          wrapperStyle={styles.flex1}
          label={t('category')}
          optionList={categoryOptions}
          placeholder={t('recipe_category_placeholder')}
        />
        <LabeledTextInput
          wrapperStyle={styles.flex1_5}
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
          wrapperStyle={styles.flex1}
          textInputStyle={styles.textAlignRight}
          value=""
          label={t('oven_temperature')}
          suffix={t('temperature')}
          placeholder="0"
        />
        <LabeledTextInput
          wrapperStyle={styles.flex1}
          textInputStyle={styles.textAlignRight}
          value=""
          label={t('oven_time')}
          suffix={t('minute')}
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
