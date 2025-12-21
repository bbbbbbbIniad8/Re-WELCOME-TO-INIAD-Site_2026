import { articles } from "app/src/data/articles";
import { Incomplete } from "./alert";

type Props = {
  article: {title: string, date: string, complated: boolean};
  author: {name: string; isAnonymous: boolean },
  category: {name: string};
};

const Title = ({article, author, category}: Props) => {
    const titleStyle = {
        fontSize: '200%',
        fontWeight: 700,
    } as const;
    const contentStyle = {
        borderBottom: '1px solid black',
        paddingBottom: 0,
        width: '70vw',
    } as const;
    return (
        <>
        <div style={contentStyle}>
        <div style={titleStyle}>{article.title}</div> 
        <div>著者: {author.isAnonymous === true ? '匿名希望':author.name} 
            　作成日: {article.date} カテゴリ: {category.name}</div>
        </div>
            {!article.complated && <Incomplete />}
        </>
         
    )

}

export default Title;