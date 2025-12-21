import Link from "next/link";
import { articles } from "../src/data/articles";

type naviHProps = {
    children: React.ReactNode;
};

const NaviH = ({children}: naviHProps) =>{
  const naviHeadingStyle = {
      fontWeight: 1000,
      fontSize: 30,
      textAlign: 'center',
      border: '1px solid red'
    } as const;

    return (
      <div style={naviHeadingStyle}>{children}</div>
    )
}

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
        <NaviH>基本</NaviH>
        {articles.filter((a) => a.category === "base").map((a)=> (
          <li key={a.id} >
            <Link href={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
        <NaviH>講義一覧</NaviH>
        {articles.filter((a) => a.category === "lecture").map((a)=> (
          <li key={a.id} >
            <Link href={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
        
    )

}

export default Navi;