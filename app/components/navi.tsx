import Link from "next/link";
import { articles } from "../src/data/articles";

const Navi = () => {
    const naviStyle = {
        padding: 16,
        marginTop: 0,
        background: 'black',
        color: 'red',
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        width: '20vw'
    } as const;
    return (
       <ul style={naviStyle}>
        <p>基本</p>
        {articles.filter((a) => a.category === "base").map((a)=> (
          <li key={a.id} >
            <Link href={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
        <p>講義一覧</p>
        {articles.filter((a) => a.category === "lecture").map((a)=> (
          <li key={a.id} >
            <Link href={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
        
    )

}

export default Navi;