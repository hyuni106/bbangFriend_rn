import React from 'react';

import { useNavigation } from 'hooks/useNavigation';
import { IcBack } from 'assets/svgs';
import NavBar, { NavBarProps } from './NavBar';

interface BackButtonNavBarProps extends Omit<NavBarProps, 'leftButton'> {
  onBackButtonPress?: () => void;
}

const BackButtonNavBar = (props: BackButtonNavBarProps): React.ReactElement => {
  const { onBackButtonPress } = props;
  const navigation = useNavigation();

  return (
    <NavBar
      leftButton={{
        icon: IcBack,
        onPress: () => {
          onBackButtonPress ? onBackButtonPress() : navigation.canGoBack() && navigation.goBack();
        },
      }}
      {...props}
    />
  );
};

export default BackButtonNavBar;
