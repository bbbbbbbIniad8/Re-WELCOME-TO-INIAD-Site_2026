import Text from '../../components/text'
import H from '../../components/heading'

type Props = {
    children: React.ReactNode;
}

const SubH = ({children} : Props) =>{
    const subHstyle = {
        marginLeft: '1rem',
        borderBottom: '2px black solid',
        fontSize:20,
        fontWeight: 500,
        paddingLeft: '1rem',
        backgroundColor: 'rgb(7, 255, 172)',
        borderRadius: 5,
    }
    return (
        <h2 style={subHstyle}>
            {children}
            </h2>
    )
}

// padding付きtextコンポーネント
const TextP = ({children} : Props) =>{
    const style = {
        paddingLeft: '2rem' 
    }
    return (
        <Text><div style={style}>
            {children}
            </div>
        </Text>
    )
}

export default function Learn() {

  return (
    <>
        <H>概要</H>
        <Text>この記事では、情報連携学部に入学し、
            授業が始まる前に行うべきことを羅列する。</Text>
        <SubH>パソコンの購入</SubH>
        <TextP>情報連携学部のカリキュラムは、全員自分専用のパソコンがあることを前提としている。
            パソコンが無いと、課題のプログラムの作成が困難になるため、入学前に絶対に買っておこう。
        </TextP>
        <SubH>タッチタイピングの習得</SubH>
        <TextP>
            タイピング速度が速いと課題レポートの作成やコーディングをスムーズに行うことができる。
            できるだけ入学前に、キーボードを見ずにタイピングできるタッチタイピングを習得しておこう。寿司打などの
            ゲーム感覚でタイピングを練習できるサイトで練習するのがおすすめ。
        </TextP>
        <SubH>Pythonの予習</SubH>
        <TextP>
            入学前に、CS概論1で勉強するPythonというプログラミング言語の予習を行っておくと、
            入学後の授業が楽になる。defやforなどのとにかく基本的な部分を学習しておこう。
        </TextP>
        <SubH>Xの登録 & 大学垢の作成</SubH>
        <TextP>Xに大学垢を作り、他の情報連携学部生をフォローすることで、情報の収集が簡単になる。
            ほかにも、入学前にSNSで知り合いを作れるというメリットもあるのでなるべくXに登録しておこう。
            新入生はプロフィールに INIAD 10期生 と記入すると先輩たちからフォローされやすい。</TextP>
        <H>関連リンク</H>
        <Text><a href="https://sushida.net/">寿司打</a></Text>
          
    </>
  );
}