import React, { useState } from 'react';
import { StyleProp, ViewStyle, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Text, TouchableOpacity } from 'components/common/Base';
import { Colors, Typography } from 'styles';
import { hexAlpha } from 'styles/colors';
import { IcDropdownBottom, IcDropdownTop } from 'assets/svgs';

const HEIGHT = 42;

export interface DropdownProps<T> {
  style?: StyleProp<ViewStyle>;
  optionList: T[];
  selectedOption?: T;
  placeholder: string;
  displayKey?: keyof T;
  isI18n?: boolean;
  onPress?: (isOpened: boolean) => void;
  onOptionSelected?: (option: T) => void;
}

const Dropdown = <T,>(props: DropdownProps<T>): React.ReactElement => {
  const { t } = useTranslation();

  const {
    style,
    optionList,
    selectedOption,
    placeholder,
    displayKey,
    isI18n,
    onPress,
    onOptionSelected,
  } = props;
  const [isOpen, setOpen] = useState(false);

  const onToggleDropdown = () => {
    setOpen(!isOpen);
    onPress?.(!isOpen);
  };

  const renderItems = () => {
    return optionList.map((item, index) => {
      const displayText = displayKey ? item[displayKey] : item;
      const isSelected = selectedOption === item;

      return (
        <TouchableOpacity
          key={`dropdown_${index}`}
          style={[
            styles.itemContainer,
            isSelected && { backgroundColor: hexAlpha(Colors.gray3, 0.15) },
          ]}
          onPress={() => {
            setOpen(false);
            onOptionSelected?.(item);
          }}>
          <Text style={styles.itemText}>
            {isI18n ? t(`${String(displayText)}`) : String(displayText)}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const selectedText = selectedOption
    ? displayKey
      ? String(selectedOption[displayKey])
      : String(selectedOption)
    : placeholder;

  return (
    <View style={[styles.root, style]}>
      <TouchableOpacity style={styles.infoContainer} onPress={onToggleDropdown}>
        <Text style={selectedOption ? styles.selectedOptionText : styles.pleaseSelectText}>
          {isI18n ? t(`${selectedText}`) : selectedText}
        </Text>
        {isOpen ? <IcDropdownTop /> : <IcDropdownBottom />}
      </TouchableOpacity>
      {isOpen && <View style={styles.listContainer}>{renderItems()}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: HEIGHT,
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    gap: 4,
  },
  pleaseSelectText: {
    flex: 1,
    ...Typography.body_14M,
    color: Colors.gray4,
  },
  selectedOptionText: {
    flex: 1,
    ...Typography.body_14M,
    color: Colors.gray1,
  },
  listContainer: {
    zIndex: 10,
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    marginTop: HEIGHT + 8,
    borderRadius: 8,
    paddingVertical: 8,
    backgroundColor: Colors.white,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 47,
    paddingHorizontal: 16,
  },
  itemText: {
    ...Typography.body_14M,
    color: Colors.gray1,
  },
});

export default Dropdown;
