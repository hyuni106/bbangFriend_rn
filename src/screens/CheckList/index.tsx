import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { Props } from 'navigation/NavigationProps';
import { ScreenName } from 'navigation/ScreenNames';
import { BackButtonNavBar } from 'components/NavigationBar';
import { Colors } from 'styles';
import CheckListItem from './CheckListItem';

export interface Item {
  id: string;
  isChecked: boolean;
  content: string;
}

const CheckListScreen = ({}: Props<ScreenName.CheckListScreen>): React.ReactElement => {
  const { t } = useTranslation();

  const [data, setData] = useState<Item[]>([
    { id: '1', isChecked: false, content: '버터사기' },
    { id: '2', isChecked: true, content: '뭐사기' },
    { id: '3', isChecked: false, content: '저쩌고 사기' },
  ]);

  const toggleCheck = (id: string) => {
    setData(prevData =>
      prevData.map(item => (item.id === id ? { ...item, isChecked: !item.isChecked } : item)),
    );
  };

  const renderCheckListItem: ListRenderItem<Item> = (info: ListRenderItemInfo<Item>) => {
    const { item, index } = info;

    const containerMarginStyle: StyleProp<ViewStyle> = {
      marginTop: index !== 0 ? 8 : 0,
    };

    return <CheckListItem style={containerMarginStyle} item={item} toggleCheck={toggleCheck} />;
  };

  return (
    <View style={styles.root}>
      <BackButtonNavBar title={t('check_list.title')} />

      <FlatList<Item>
        style={styles.list}
        keyExtractor={item => item.id}
        data={data}
        renderItem={renderCheckListItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.gray6,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default CheckListScreen;
