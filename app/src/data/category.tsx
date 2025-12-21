export type Category = {
  id: string;
  name: string;
};

export const CATEGORYS = {
  BASE: {
    id: "base",
    name: "基本データ",
  },
  LECTURE: {
    id: "lecture",
    name: "講義",
  },
  OTHER: {
    id: "other",
    name: "その他",
  },
} as const;

export type CategoryId = keyof typeof CATEGORYS;
