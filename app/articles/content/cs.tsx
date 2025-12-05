import Text from '../../components/text'
import H from '../../components/heading'
import LecTable from 'app/components/lectureTable';

export default function CS1() {
  return (
    <>
      
        
        <H>概要</H>
        <Text><b>コンピュータ・サイエンス概論1</b>とは、1年春学期に全員が受講しなければならない必修科目の1つである。</Text>
        <Text>略してCS概論1と呼ばれることが多い。</Text>

        <LecTable name="コンピューターサイエンス概論1" unit={4} frequency="週2" test="中間・期末"/>

        <H>何を学ぶのか？</H>
        <Text>pythonの基本的な文法や、html、CSSなどのマークアップ言語、Github、正規表現、APIの使い方などを学習する。</Text>
        <Text>この講義は、プログラミング完全初心者に配慮されており、前半の2か月程度はpythonの基礎的な部分や、HTML等のものすごく基礎的な部分をゆっくり学習する。
            しかし、後半の正規表現は普通に難しいので覚悟すること。
        </Text>

        <H>入学前の予習の仕方</H>
        <Text>
            かなり簡単な内容だが、完全にプログラミング初心者の場合ここで躓いてしまう人もいるので入学前の予習をおススメする。
            予習の仕方としては、AO推薦向けに公開されているMoocsのサイトを利用してpythonの基礎的な部分を習得するといい。
            それが終わったら、とりあえずpythonを使って自分で何かしら作ってみることを繰り返して、プログラミング的思考を養うといい。
            
        </Text>
        <H>余談</H>
        <ul>
            <li><Text>留年条件として「1年次に9単位以上落単」だが、
                この講義の単位数は4であるため、この講義で落胆してしまうと留年に大きく近づくことになる。</Text></li>
            <li><Text>この講義の中間試験は実は成績評価に含まないという定説があるが、
                この講義の中間試験は、情報連携学部で行われるテストの中でトップレベルに簡単なため、中間試験でいい点数をとれないと予後が悪い。</Text></li>
        </ul>
        <H>関連リンク</H>
        <a href="https://admission.iniad.org/courses">AO推薦向けINIAD Moocs</a>
          
    </>
  );
}