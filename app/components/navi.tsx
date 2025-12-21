import Link from "next/link";
import { articles } from "../src/data/articles";
import { CATEGORYS } from "app/src/data/category";

type Props = {
    children: React.ReactNode;
};

const NaviH = ({children}: Props) =>{
  const Style = {
      fontWeight: 500,
      fontSize: 20,
      textAlign: 'center',
      border: '1px solid red'
    } as const;

    return (
      <div style={Style}>{children}</div>
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
        <NaviH>{CATEGORYS.BASE.name}</NaviH>
        {articles.filter((a) => a.category.name === CATEGORYS.BASE.name).map((a)=> (
          <li key={a.id} >
            <Link href={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
        <NaviH>{CATEGORYS.LECTURE.name}一覧</NaviH>
        {articles.filter((a) => a.category.name === CATEGORYS.LECTURE.name).map((a)=> (
          <li key={a.id} >
            <Link href={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    )
}
export default Navi;