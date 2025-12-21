import {Text} from '../../components/text'
import {H} from '../../components/heading'
import LecTable from 'app/components/lectureTable';

export default function CS1() {
  return (
    <>
        <H>概要</H>
        <Text><b>コンピュータ・サイエンス概論1</b>とは、1年春学期に全員が受講しなければならない必修科目の1つである。</Text>
        <Text>略してCS概論1と呼ばれることが多い。</Text>

        <LecTable name="コンピューターサイエンス概論1" unit={4} frequency="週2" test="中間・期末"/>

        <H>何を学ぶのか？</H>
        <Text>Pythonの基本的な文法や、html、CSSなどのマークアップ言語、GitHubの使い方、
            正規表現、JavaScriptでのAPIの使い方などを学習する。</Text>
        <Text>この講義は、プログラミング完全初心者に配慮されており、
            前半の2か月程度はPythonの基礎的な部分や、HTML等のものすごく基礎的な部分をゆっくり学習する。
            しかし、後半の正規表現など、普通に難しい部分もある。
        </Text>

        <H>試験</H>
        <Text>5月に中間試験。7月に期末試験がある。5月の中間試験の出題範囲は主にPythonの基礎的な部分。
            7月の期末試験の出題範囲は、5月の中間試験を含めたすべての範囲。
            いづれもテスト前に学校から過去問が配布されるのでそれを徹底的に分析するのが効率がいい。
            期末試験で、6割以下の点数を取ると、単位の取得が難しくなる。</Text>

        <H>入学前の予習の仕方</H>
        <Text>
            初心者にも考慮された簡単な内容だが、完全にプログラミング初心者の場合ここで躓いてしまう人もいるので入学前の予習を推奨する。
            予習の仕方としては、AO推薦向けに公開されているMOOCsのサイトを利用してPythonの基礎的な部分を習得するといい。
            それが終わったら、とりあえずPythonを使って自分で何かしら作ってみることを繰り返して、
            プログラミング的思考を養っておくとテストでもいい結果を出せるだろう。
        </Text>
        <H>余談</H>
        <Text>留年条件として「1年次に9単位以上落単」だが、
            この講義の単位数は4であるため、この講義で落胆してしまうと留年に大きく近づくことになる。</Text>
        <H>関連リンク</H>
        <a href="https://admission.iniad.org/courses">AO推薦向けINIAD MOOCs</a>
          
    </>
  );
}