import { useCallback, useEffect } from 'react';
import { useNavigation } from 'hooks/useNavigation';
import { ScreenName } from 'navigation/ScreenNames';

const movingScreenMinDelay = 1500;

export default function useMoveScreen(splashLaunchedTime: number) {
  const navigation = useNavigation();

  const runAfterDelay = useCallback(
    (callback: () => void) => {
      const delay = Math.max(0, splashLaunchedTime + movingScreenMinDelay - Date.now());
      setTimeout(callback, delay);
    },
    [splashLaunchedTime],
  );

  useEffect(() => {
    runAfterDelay(() => {
      navigation.replace(ScreenName.MainTabBarScreen);
    });
  }, [navigation, runAfterDelay]);
}
