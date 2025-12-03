import { notFound } from "next/navigation";
import { articles } from "../../src/data/articles";

import Header from '../../components/topHeader'
import Navi from '../../components/navi'
import Title from '../../components/title'
import Content from '../../components/content'


type Props = {
  params: {
    id: string;
  };
};

// 静的パス生成
export async function generateStaticParams() {
  return articles.map((a) => ({
    id: a.id,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const id = (await params).id;
  const article = articles.find((a) => a.id === id);
  if (!article) return notFound();

  return (
    <main>
        <Header/>
        <div style={{display:'flex', flexDirection: "row"}}>
          <Navi/>
          <Content>
            <Title title={article.title} author={article.author} date={"2022-2-22"}></Title>
            {article.content}
          </Content>
        </div>
    </main>
  );
}
