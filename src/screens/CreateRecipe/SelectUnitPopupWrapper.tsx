import React, { forwardRef, Ref, useCallback, useImperativeHandle, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { BaseModal } from 'components/common/Base';
import SelectUnitPopup from './SelectUnitPopup';
import { IngredientUnit } from 'models';

interface SelectUnitPopupWrapperState {
  visible: boolean;
}

export interface SelectUnitPopupWrapperRef {
  show: () => void;
  hide: () => void;
}

interface SelectUnitPopupWrapperProps {
  style?: StyleProp<ViewStyle>;
  units: IngredientUnit[];
}

const SelectUnitPopupWrapper = forwardRef(
  (props: SelectUnitPopupWrapperProps, ref: Ref<SelectUnitPopupWrapperRef>): React.ReactElement => {
    const [state, setState] = useState<SelectUnitPopupWrapperState>({
      visible: false,
    });

    const { visible } = state;

    const { style, units } = props;

    const show = useCallback(() => {
      setState({ visible: true });
    }, [setState]);

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

    return (
      <BaseModal isVisible={visible} style={style} onBackdropPress={onBackdropPress}>
        <SelectUnitPopup units={units} />
      </BaseModal>
    );
  },
);

export default SelectUnitPopupWrapper;
