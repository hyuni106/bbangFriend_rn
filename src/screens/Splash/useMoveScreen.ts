import { useCallback, useEffect } from 'react';

const movingScreenMinDelay = 1500;

export default function useMoveScreen(splashLaunchedTime: number) {
  const runAfterDelay = useCallback(
    (callback: () => void) => {
      const delay = Math.max(0, splashLaunchedTime + movingScreenMinDelay - Date.now());
      setTimeout(callback, delay);
    },
    [splashLaunchedTime],
  );

  useEffect(() => {
    runAfterDelay(() => {
      // TODO: MainTabScreen 이동 추가
    });
  }, [runAfterDelay]);
}
