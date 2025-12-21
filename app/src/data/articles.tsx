import { AUTHORS, type Author } from "./author";
import { CATEGORYS, type Category } from "./category";

export type Article = {
  id: string;
  title: string;
  author: Author;
  date: string;
  category: Category;
  complated: boolean
};

export const articles: Article[] = [
{
"id": "what-is-iniad",
"title": "INIADとは",
author: AUTHORS.USER_0X7B,
"date": "2025-12-02",
category: CATEGORYS.BASE,
complated: false
},
{
"id": "cs1",
"title": "コンピュータ・サイエンス概論1",
author: AUTHORS.USER_0X7B,
"date": "2025-12-02",
category: CATEGORYS.LECTURE,
complated: false
},
{
"id": "learn",
"title": "入学前にするべきこと",
author: AUTHORS.USER_0X7B,
"date": "2025-12-02",
category: CATEGORYS.BASE,
complated: false
},
{
"id": "start-sns",
"title": "SNSを始めよう!!!",
author: AUTHORS.USER_0X7B,
"date": "2025-12-21",
category: CATEGORYS.OTHER,
complated: false
}
]