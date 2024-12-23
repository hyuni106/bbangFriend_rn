import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, View } from 'react-native';

import { Colors, Typography } from 'styles';
import { Text, TouchableOpacity } from 'components/common/Base';
import FavoriteButton from './FavoriteButton';
import RecipeTag from 'components/Recipe/RecipeTag';

interface RecipeSummaryProps {
  style?: StyleProp<ViewStyle>;
  onItemPress?: () => void;
}

const RecipeSummary = (props: RecipeSummaryProps): React.ReactElement => {
  const { style, onItemPress } = props;

  return (
    <TouchableOpacity style={[styles.root, style]} onPress={onItemPress}>
      <View style={styles.tagAndLikeContainer}>
        <RecipeTag title="TAG" isSelected={true} />
        <FavoriteButton isActive={false} />
      </View>
      <Text style={styles.recipeNameText}>NAME</Text>
      <Text style={styles.recipeDescText}>DESCRIPTION</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  tagAndLikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recipeNameText: {
    ...Typography.title_16B,
    color: Colors.gray1,
    marginTop: 12,
  },
  recipeDescText: {
    ...Typography.body_14M,
    color: Colors.gray1,
    marginTop: 8,
  },
});

export default RecipeSummary;
