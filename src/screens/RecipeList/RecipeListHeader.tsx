import React, { useEffect, useState } from 'react';
import { StyleProp, ViewStyle, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { TouchableOpacity } from 'components/common/Base';
import RecipeTag from 'components/Recipe/RecipeTag';
import { RecipeFilterType, RecipeTag as Tags } from 'models';
import { RecipeTagAction } from 'databases/recipeTags/actions';

interface FilterItem {
  type: RecipeFilterType;
  title: string;
}

interface RecipeListHeaderProps {
  style?: StyleProp<ViewStyle>;
  selectedFilter: string;
  onItemPress?: (type: RecipeFilterType, tagId?: number) => void;
}

const RecipeListHeader = (props: RecipeListHeaderProps): React.ReactElement => {
  const { t } = useTranslation();
  const { style, selectedFilter, onItemPress } = props;

  const [tags, setTags] = useState<Tags[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const fetchedTags = await RecipeTagAction.fetchAllRecipeTags();
        setTags(fetchedTags);
      } catch (error) {
        console.error('Failed to fetch tags:', error);
      }
    };

    fetchTags();
  }, []);

  const staticFilters: FilterItem[] = [
    { type: RecipeFilterType.ALL, title: t('recipe.tags.all') },
    { type: RecipeFilterType.FAVORITE, title: t('recipe.tags.favorite') },
  ];

  return (
    <View style={[styles.root, style]}>
      {staticFilters.map((item, idx) => {
        const isSelected = item.type === selectedFilter;
        return (
          <TouchableOpacity key={`filter_${idx}`} onPress={() => onItemPress?.(item.type)}>
            <RecipeTag title={item.title} isSelected={isSelected} />
          </TouchableOpacity>
        );
      })}

      {tags.map(tag => {
        const isSelected = selectedFilter === String(tag.id);
        return (
          <TouchableOpacity
            key={`tag_${tag.id}`}
            onPress={() => onItemPress?.(RecipeFilterType.TAG, tag.id)}>
            <RecipeTag title={t(tag.key)} isSelected={isSelected} />
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

export default React.memo(RecipeListHeader);
