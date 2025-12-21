import { AUTHORS, type Author } from "./author";

export type Article = {
  id: string;
  title: string;
  author: Author;
  date: string;
  category: string;
};

export const articles: Article[] = [
{
"id": "what-is-iniad",
"title": "INIADとは",
author: AUTHORS.USER_0X7B,
"date": "2025-12-02",
"category": "base"
},
{
"id": "cs1",
"title": "コンピュータ・サイエンス概論1",
author: AUTHORS.USER_0X7B,
"date": "2025-12-02",
"category": "lecture"
},
{
"id": "learn",
"title": "入学前にするべきこと",
author: AUTHORS.USER_0X7B,
"date": "2025-12-02",
"category": "base"
}
]