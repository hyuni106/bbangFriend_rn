const Colors = {
  primaryAccent: '#B97C4B',
  secondaryAccent: '#C48C63',
  error: '#F45A39',
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
  gray1: '#1F1F20',
  gray2: '#424345',
  gray3: '#8C8E90',
  gray4: '#9A9C9E',
  gray5: '#DFE2E5',
  gray6: '#F5F7FA',
  red1: '#EF846D',
  red2: '#F0A99B',
  orange1: '#F2A371',
  orange2: '#F4B489',
  blue1: '#90A5F8',
  blue2: '#BCC9FB',
} as const;

export default Colors;

const hexToRGB = (input: string) => {
  let hex = input;

  if (hex.length === 4) {
    hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }

  return {
    r: parseInt(hex.substring(1, 3), 16),
    g: parseInt(hex.substring(3, 5), 16),
    b: parseInt(hex.substring(5, 7), 16),
  };
};

const formatRGB = ({ r, g, b }: { r: number; g: number; b: number }) => `rgb(${r},${g},${b})`;
const formatRGBA = ({ r, g, b }: { r: number; g: number; b: number }, alpha: number) =>
  `rgba(${r},${g},${b},${alpha})`;

/**
 * @param {string} input - A color in hexadecimal syntax. e.g. #fa6d01
 * @param {number} alpha - The desired opacity, from 0 to 1.
 * @returns {string} - The new color in rgba() or rgb() syntax.
 */
export const hexAlpha = (input: string, alpha: number) => {
  const newColor = hexToRGB(input);

  return typeof alpha === 'number' && alpha >= 0 && alpha <= 1
    ? formatRGBA(newColor, alpha)
    : formatRGB(newColor);
};
