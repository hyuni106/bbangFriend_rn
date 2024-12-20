import { Dimensions } from 'react-native';
import { IS_IOS } from 'utils/PlatformInfo';

export default class Dimens {
  static screenWidth = Dimensions.get('window').width;
  static screenHeight = Dimensions.get('window').height;
  static navBarHeight = IS_IOS ? 52 : 56;
}
