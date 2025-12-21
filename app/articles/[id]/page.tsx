import { notFound } from "next/navigation";
import { articles } from "../../src/data/articles";
import { contentMap } from "../../src/data/contentMap";

import Header from '../../components/topHeader'
import Navi from '../../components/navi'
import Title from '../../components/title'
import Content from '../../components/content'

export function generateStaticParams() {
  return articles.map(a => ({ id: a.id }));
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;          

  const article = articles.find(a => a.id === id);
  if (!article) return notFound();

  const ContentComponent = contentMap[id];
  if (!ContentComponent) return notFound();

  return (
    <main>
        <Header/>
        <div style={{display:'flex', flexDirection: "row"}}>
          <Navi/>
          <Content>
            <Title article={article} author={article.author} category={article.category}></Title>
            <ContentComponent/>
          </Content>
        </div>
    </main>
  );
}
