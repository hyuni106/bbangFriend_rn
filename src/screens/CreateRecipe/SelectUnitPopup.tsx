import React, { useMemo } from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  ScaledSize,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { Colors, Typography } from 'styles';
import { Text, TouchableOpacity } from 'components/common/Base';
import { IngredientUnit } from 'models';

interface SelectUnitPopupProps {
  style?: StyleProp<ViewStyle>;
  units: IngredientUnit[];
  onClosePress?: () => void;
  onItemPress?: (unit: IngredientUnit) => void;
}

const SelectUnitPopup = (props: SelectUnitPopupProps): React.ReactElement => {
  const window = useWindowDimensions();
  const styles = useMemo(() => createStyles(window), [window]);
  const { t } = useTranslation();

  const { style, units, onItemPress } = props;

  const groupedUnits = units.reduce<Record<string, IngredientUnit[]>>((acc, unit) => {
    if (!acc[unit.category]) acc[unit.category] = [];
    acc[unit.category].push(unit);
    return acc;
  }, {});

  return (
    <View style={[styles.root, style]}>
      <Text style={styles.titleText}>{t('recipe.form.ingredient.desc')}</Text>
      <ScrollView>
        {Object.entries(groupedUnits).map(([category, units]) => (
          <View key={category}>
            <Text style={styles.categoryTitleText}>{t(`recipe.units.categories.${category}`)}</Text>
            {units.map(unit => (
              <TouchableOpacity
                key={`unit_${unit.id}`}
                style={styles.unitItemText}
                onPress={() => onItemPress?.(unit)}>
                <Text>{t(`${unit.key}`)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const createStyles = (scaledSize: ScaledSize) => {
  return StyleSheet.create({
    root: {
      flexDirection: 'column',
      width: scaledSize.width - 60,
      height: 250,
      borderRadius: 16,
      backgroundColor: Colors.white,
      paddingVertical: 16,
      paddingHorizontal: 24,
    },
    titleText: {
      ...Typography.title_14B,
      color: Colors.gray1,
      height: 32,
    },
    categoryTitleText: {
      ...Typography.body_12M,
      color: Colors.gray3,
      marginBottom: 12,
    },
    unitItemText: {
      ...Typography.body_14M,
      color: Colors.gray1,
      height: 35,
      marginLeft: 4,
    },
  });
};

export default SelectUnitPopup;
