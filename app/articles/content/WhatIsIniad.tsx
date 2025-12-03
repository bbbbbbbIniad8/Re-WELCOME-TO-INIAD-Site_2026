import Text from '../../components/text'
import H from '../../components/heading'

export default function WhatIsIniad() {
  const calcGrade = () =>{
    const lst = [];
    const startYear = 2017;
    for (let i:number=startYear; i <= 2026; i++){
      lst.push([i ,i - startYear + 1]);
    }
    return lst
  }
  const gradeList = calcGrade();
  return (
    <>
        <H>概要</H>
        <Text><b>INIAD</b>とは情報連携学部の略称である。学外ではあまり浸透していないが、情報連携学部の学生の間では基本的にINIAD呼びが定着している。</Text>
        <Text>本サイトでは、わかりやすさを優先し、本来ならINIADと表記する部分を情報連携学部と表記する。</Text>
        <br></br>
        <Text>なお、INIADとは以下の略称である。</Text>
        <Text><b>Information Networking for Innovation And Design</b></Text>
        <Text>(情報連携によるイノベーションとデザイン)</Text>
        <br></br>
        <H>INIAD〇期生</H>
        <Text>情報連携学部では、入学年に合わせて、INIAD〇期生を自称する文化が存在する。
          SNSなどで、これを記載することで相手に自分の学年を伝えることが可能。</Text>
        <table style={{
            borderCollapse: 'collapse', 
            width: '300px'
            }}>
        <thead>
            <tr>
            <th>入学年</th>
            <th>〇期生</th>
            </tr>
        </thead>
        <tbody>
        {gradeList.map(([year, grade], index) => 
             <tr key={index} > 
            <td>{year}年</td>
            <td>{grade}期生</td>
        </tr>)}</tbody>

        </table>
        <H>関連リンク</H>
        <Text><a href="https://www.iniad.org/">INIAD公式サイト </a></Text>
          
    </>
  );
}