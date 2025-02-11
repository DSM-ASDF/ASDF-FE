const fontGenerator = (weight: number, size: number, lineHeight: number) => ({
  fontFamily: "Pretendard",
  fontWeight: `${weight}`,
  fontSize: `${size / 16}rem`,
  lineHeight: `${lineHeight}%`,
});

export const Font = {
  semi: {
    54: fontGenerator(600, 54, 180),
    32: fontGenerator(600, 32, 180),
    24: fontGenerator(600, 24, 140),
    18: fontGenerator(600, 18, 140),
    16: fontGenerator(600, 16, 140),
    12: fontGenerator(600, 12, 120),
  },
  medium: {
    32: fontGenerator(500, 32, 180),
    24: fontGenerator(500, 24, 140),
    20: fontGenerator(500, 20, 140),
    18: fontGenerator(500, 18, 140),
    16: fontGenerator(500, 16, 140),
    14: fontGenerator(500, 14, 120),
    12: fontGenerator(500, 12, 120),
  },
  regular: {
    20: fontGenerator(400, 20, 140),
    18: fontGenerator(400, 18, 140),
    16: fontGenerator(400, 16, 140),
    14: fontGenerator(400, 14, 120),
    12: fontGenerator(400, 12, 120),
  },
};
