import React from 'react';
import { StyleProp, ViewStyle, StyleSheet, View, TextStyle } from 'react-native';

import { Colors, Typography } from 'styles';
import { AnimatedCheckBox } from 'components/common/Checkbox';
// TODO: model 설계 및 추가 후 수정 예정
import { Item } from '.';
import { Text } from 'components/common/Base';
import { RemoveButton } from 'components/common/Button';

interface CheckListItemProps {
  style?: StyleProp<ViewStyle>;
  item: Item;
  toggleCheck?: (id: string) => void;
}

const CheckListItem = (props: CheckListItemProps): React.ReactElement => {
  const { style, item, toggleCheck } = props;

  const contentTextColorStyle: StyleProp<TextStyle> = {
    color: item.isChecked ? Colors.gray3 : Colors.gray1,
  };

  return (
    <View style={[styles.root, style]}>
      <View style={styles.contentContainer}>
        <AnimatedCheckBox
          isChecked={item.isChecked}
          highlightColor={Colors.orange1}
          size={24}
          onPress={() => toggleCheck?.(item.id)}
        />
        <Text style={[styles.contentText, contentTextColorStyle]}>{item.content}</Text>
      </View>
      <RemoveButton color={Colors.orange1} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  contentText: {
    ...Typography.body_14M,
    marginLeft: 8,
  },
});

export default CheckListItem;
