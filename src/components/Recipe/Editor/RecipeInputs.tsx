import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useImmer } from 'use-immer';
import { useTranslation } from 'react-i18next';

import { LabeledTextInput } from 'components/common/TextInput';
import { LabeledDropdown } from 'components/common/Dropdown';
import { RecipeTagAction } from 'databases/recipeTags/actions';
import { RecipeTag } from 'models';

interface RecipeInputState {
  name: string;
  desc: string;
  tag?: RecipeTag;
  temperature?: number;
  time?: number;
  sourceUrl?: string;
}

interface RecipeInputsProps {
  style?: StyleProp<ViewStyle>;
}

const RecipeInputs = ({}: RecipeInputsProps): React.ReactElement => {
  const { t } = useTranslation();
  const [tags, setTags] = useState<RecipeTag[]>([]);
  const [state, setState] = useImmer<RecipeInputState>({
    name: '',
    desc: '',
  });

  const fetchAllRecipeTags = async () => {
    try {
      const fetchedTags = await RecipeTagAction.fetchAllRecipeTags();
      setTags(fetchedTags);
    } catch (error) {
      console.error('Failed to fetch tags:', error);
    }
  };

  useEffect(() => {
    fetchAllRecipeTags();
  }, []);

  const onOptionSelected = (option: RecipeTag) => {
    setState(draft => {
      draft.tag = option;
    });
  };

  const handleChangeText = (
    key: 'name' | 'desc' | 'sourceUrl' | 'temperature' | 'time',
    text: string,
  ) => {
    setState(draft => {
      if (key === 'temperature' || key === 'time') {
        if (!text || text === '') {
          draft[key] = 0;
          return;
        }
        draft[key] = parseInt(text, 10);
      } else {
        draft[key] = text;
      }
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <LabeledDropdown
          wrapperStyle={styles.flex1}
          label={t('recipe.form.category.label')}
          placeholder={t('recipe.form.category.placeholder')}
          selectedOption={state.tag}
          optionList={tags}
          displayKey={'key'}
          isI18n
          onOptionSelected={onOptionSelected}
        />
        <LabeledTextInput
          wrapperStyle={styles.flex1_5}
          value={state.name}
          label={t('recipe.form.name.label')}
          placeholder={t('recipe.form.name.placeholder')}
          onChangeText={text => handleChangeText('name', text)}
        />
      </View>

      <LabeledTextInput
        value={state.desc}
        label={t('recipe.form.description.label')}
        placeholder={t('recipe.form.description.placeholder')}
        onChangeText={text => handleChangeText('desc', text)}
      />

      <LabeledTextInput
        value={state.sourceUrl}
        label={t('recipe.form.source.label')}
        placeholder={t('recipe.form.source.placeholder')}
        onChangeText={text => handleChangeText('sourceUrl', text)}
      />

      <View style={styles.inputContainer}>
        <LabeledTextInput
          wrapperStyle={styles.flex1}
          textInputStyle={styles.textAlignRight}
          value={`${state.temperature ? state.temperature : 0}`}
          label={t('recipe.form.oven.temperature.label')}
          suffix={t('recipe.form.oven.temperature.unit')}
          placeholder="0"
          onChangeText={text => handleChangeText('temperature', text)}
        />
        <LabeledTextInput
          wrapperStyle={styles.flex1}
          textInputStyle={styles.textAlignRight}
          value={`${state.time ? state.time : 0}`}
          label={t('recipe.form.oven.time.label')}
          suffix={t('recipe.form.oven.time.unit')}
          placeholder="0"
          onChangeText={text => handleChangeText('time', text)}
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
