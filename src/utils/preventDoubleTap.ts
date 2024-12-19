const delay = 300;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function preventDoubleTap<T extends (...args: any[]) => void>(
  func: T,
  wait?: number,
): (...args: Parameters<T>) => void {
  let inCooldown = false;

  return (...args: Parameters<T>) => {
    if (!inCooldown) {
      func(...args);
      inCooldown = true;

      setTimeout(() => {
        inCooldown = false;
      }, wait ?? delay);
    }
  };
}
