import { Platform, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const ERROR_ONLY_ANDROID_IS_SUPPORTED = 'Only Android is supported';
export const ERROR_ONLY_IOS_IS_SUPPORTED = 'Only iOS is supported';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const IS_IOS_NOTCH = IS_IOS && DeviceInfo.hasNotch();
export const IS_IOS_DYNAMIC_ISLAND = IS_IOS && DeviceInfo.hasDynamicIsland();

export const IS_SCREEN_WIDTH_LESS_THAN_375 = Dimensions.get('window').width < 375;
export const IS_SCREEN_HEIGHT_LESS_THAN_700 = Dimensions.get('window').height < 700;

export const checkAndroidDevice = (): void => {
  if (!IS_ANDROID) {
    throw new Error(ERROR_ONLY_ANDROID_IS_SUPPORTED);
  }
};

export const checkIOSDevice = (): void => {
  if (!IS_IOS) {
    throw new Error(ERROR_ONLY_IOS_IS_SUPPORTED);
  }
};
