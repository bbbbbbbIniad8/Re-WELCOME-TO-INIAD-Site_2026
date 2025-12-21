export type Author = {
  id: string;
  name: string;
  isAnonymous: boolean;
};

export const AUTHORS = {
  ANONYMOUS: {
    id: "anonymous",
    name: "匿名希望",
    isAnonymous: true,
  },
  USER_0X7B: {
    id: "0x7b",
    name: "0x7b",
    isAnonymous: false,
  },
} as const;

export type AuthorId = keyof typeof AUTHORS;
