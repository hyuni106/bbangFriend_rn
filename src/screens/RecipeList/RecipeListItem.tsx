import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, Text, View } from 'react-native';

import { Colors, Typography } from 'styles';
import { TouchableOpacity } from 'components/Button';

interface RecipeListItemProps {
  style?: StyleProp<ViewStyle>;
  onItemPress?: () => void;
}

const RecipeListItem = (props: RecipeListItemProps): React.ReactElement => {
  const { style, onItemPress } = props;

  return (
    <TouchableOpacity style={[styles.root, style]} onPress={onItemPress}>
      <View style={styles.tagAndLikeContainer}>
        {/* TODO: Tag 및 즐겨찾기 컴포넌트 추가 예정 */}
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
    marginTop: 20,
  },
  tagAndLikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeNameText: {
    ...Typography.title_16B,
    color: Colors.gray1,
  },
  recipeDescText: {
    ...Typography.body_14M,
    color: Colors.gray1,
    marginTop: 8,
  },
});

export default RecipeListItem;
