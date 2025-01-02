import React, { ReactNode } from 'react';
import { StyleSheet, StyleProp, ViewStyle, useWindowDimensions } from 'react-native';
import Modal from 'react-native-modal';

import { Colors } from 'styles';

interface BaseModalProps {
  isVisible: boolean;
  onBackdropPress: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  backdropOpacity?: number;
}

const BaseModal = ({
  isVisible,
  onBackdropPress,
  children,
  backdropOpacity = 0.5,
}: BaseModalProps): React.ReactElement => {
  const window = useWindowDimensions();

  return (
    <Modal
      isVisible={isVisible}
      backdropColor={Colors.gray1}
      onBackdropPress={onBackdropPress}
      backdropOpacity={backdropOpacity}
      deviceWidth={window.width}
      deviceHeight={window.height}
      style={styles.modal}>
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BaseModal;
