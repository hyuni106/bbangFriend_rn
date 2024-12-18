import { TextStyle } from 'react-native';

export const FONT_MEDIUM = 'Pretendard-Medium';
export const FONT_BOLD = 'Pretendard-Bold';

type TypographyStyle = Pick<
  TextStyle,
  'fontFamily' | 'fontSize' | 'fontStyle' | 'fontWeight' | 'lineHeight' | 'letterSpacing'
>;

type TypographyStyleKey =
  | 'title_24B'
  | 'title_20B'
  | 'title_16B'
  | 'title_14B'
  | 'body_16M'
  | 'body_14M'
  | 'body_12M'
  | 'body_11M';

const Typography: Record<TypographyStyleKey, TypographyStyle> = {
  title_24B: {
    fontFamily: FONT_BOLD,
    fontSize: 24,
  },
  title_20B: {
    fontFamily: FONT_BOLD,
    fontSize: 20,
  },
  title_16B: {
    fontFamily: FONT_BOLD,
    fontSize: 16,
  },
  title_14B: {
    fontFamily: FONT_BOLD,
    fontSize: 14,
  },
  body_16M: {
    fontFamily: FONT_MEDIUM,
    fontSize: 16,
  },
  body_14M: {
    fontFamily: FONT_MEDIUM,
    fontSize: 14,
  },
  body_12M: {
    fontFamily: FONT_MEDIUM,
    fontSize: 12,
  },
  body_11M: {
    fontFamily: FONT_MEDIUM,
    fontSize: 11,
  },
} as const;

export default Typography;
