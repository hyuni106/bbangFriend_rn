import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { TouchableOpacity } from 'components/Button';
import RecipeTag from 'components/Recipe/RecipeTag';
import { RecipeFilterType } from 'models';

interface FilterItem {
  type: RecipeFilterType;
  title: string;
}

interface RecipeListHeaderProps {
  style?: StyleProp<ViewStyle>;
  selectedFilter: string;
  onItemPress?: (type: string) => void;
}

const RecipeListHeader = (props: RecipeListHeaderProps): React.ReactElement => {
  const { t } = useTranslation();
  const { style, selectedFilter, onItemPress } = props;

  const filters: FilterItem[] = [
    { type: RecipeFilterType.ALL, title: t('recipe_tag_all') },
    { type: RecipeFilterType.FAVORITE, title: t('recipe_tag_favorite') },
    { type: RecipeFilterType.COMFITS, title: t('recipe_tag_comfits') },
    { type: RecipeFilterType.BREAD, title: t('recipe_tag_bread') },
  ];

  return (
    <View style={[styles.root, style]}>
      {filters.map((item, idx) => {
        const isSelected = item.type === selectedFilter;

        return (
          <TouchableOpacity key={`filter_${idx}`} onPress={() => onItemPress?.(item.type)}>
            <RecipeTag title={item.title} isSelected={isSelected} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 12,
  },
});

export default RecipeListHeader;
