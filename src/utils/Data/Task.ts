export const Major = [
  'FrontEnd',
  'BackEnd',
  'Android',
  'iOS',
  'Design',
  'AI',
  'Game',
  'Flutter',
  'Embedded',
  'DevOps',
  'Security',
  'PM',
  'QA',
  ''
] as const;

export type MajorType = (typeof Major)[number];

export const WorkArea = [
  '버그',
  '기능 개발',
  '퍼블리싱',
  '기획',
  '문서화',
  '테스트',
  '배포',
  ''
] as const;

export type WorkAreaType = (typeof WorkArea)[number];

export const Priority = [
  '긴급',
  '중간',
  '낮음',
  ''
] as const;

export type PriorityType = (typeof Priority)[number];