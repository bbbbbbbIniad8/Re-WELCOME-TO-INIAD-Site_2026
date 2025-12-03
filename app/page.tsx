import Link from "next/link";
import { articles } from "./src/data/articles";

export default function Home() {
  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            <Link href={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
