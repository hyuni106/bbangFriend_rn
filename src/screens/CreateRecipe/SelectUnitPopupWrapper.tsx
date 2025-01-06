import React, { forwardRef, Ref, useCallback, useImperativeHandle, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { BaseModal } from 'components/common/Base';
import SelectUnitPopup from './SelectUnitPopup';
import { IngredientUnit } from 'models';

interface SelectUnitPopupWrapperState {
  visible: boolean;
  index?: number;
}

export interface SelectUnitPopupWrapperRef {
  show: (index: number) => void;
  hide: () => void;
}

interface SelectUnitPopupWrapperProps {
  style?: StyleProp<ViewStyle>;
  units: IngredientUnit[];
  onUnitSelected?: (index: number, unit: IngredientUnit) => void;
}

const SelectUnitPopupWrapper = forwardRef(
  (props: SelectUnitPopupWrapperProps, ref: Ref<SelectUnitPopupWrapperRef>): React.ReactElement => {
    const [state, setState] = useState<SelectUnitPopupWrapperState>({
      visible: false,
    });

    const { visible } = state;

    const { style, units, onUnitSelected } = props;

    const show = useCallback(
      (index: number) => {
        setState({ visible: true, index: index });
      },
      [setState],
    );

    const hide = useCallback(() => {
      setState({ visible: false });
    }, [setState]);

    useImperativeHandle(
      ref,
      () => ({
        show,
        hide,
      }),
      [hide, show],
    );

    const invisible = () => {
      setState({ visible: false });
    };

    const onBackdropPress = () => {
      invisible();
    };

    const _onUnitSelected = (unit: IngredientUnit) => {
      if (state.index === undefined) return;

      onUnitSelected?.(state.index, unit);
      invisible();
    };

    return (
      <BaseModal isVisible={visible} style={style} onBackdropPress={onBackdropPress}>
        <SelectUnitPopup units={units} onItemPress={_onUnitSelected} />
      </BaseModal>
    );
  },
);

export default SelectUnitPopupWrapper;
