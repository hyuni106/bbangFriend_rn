import React from 'react';
import { StyleProp, ViewStyle, View, StyleSheet, TextStyle, Text } from 'react-native';

import { Colors, Typography } from 'styles';

interface RecipeTagProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  isSelected: boolean;
}

const RecipeTag = (props: RecipeTagProps): React.ReactElement => {
  const { style, title, isSelected } = props;

  const tagWrapperColorStyle: StyleProp<ViewStyle> = {
    backgroundColor: isSelected ? Colors.red1 : Colors.gray5,
  };

  const tagTextColorStyle: StyleProp<TextStyle> = {
    color: isSelected ? Colors.white : Colors.gray1,
  };

  return (
    <View style={[styles.root, style]}>
      <View style={[styles.tagTextWrapper, tagWrapperColorStyle]}>
        <Text style={[styles.tagText, tagTextColorStyle]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  tagText: {
    ...Typography.body_11M,
    marginTop: 1,
  },
});

export default RecipeTag;
