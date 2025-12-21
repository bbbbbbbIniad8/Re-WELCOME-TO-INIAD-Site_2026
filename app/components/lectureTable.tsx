import {Text} from "./text"

type Prop = {
    name: string,
    unit: number,
    frequency: string,
    test: string,
}

const LecTable = ({name, unit, frequency, test}: Prop) => {
    const style = {
        marginLeft: 10,
    }
    return (
       <div style={style}>
        <Text>基本データ</Text>
       <table>
        <thead>
            <tr>
                <th>
                    科目名
                </th>
                <td>
                    {name}
                </td>
            </tr>
            <tr>
                <th>
                    単位
                </th>
                <td>
                    {unit}
                </td>
            </tr>
            <tr>
                <th>
                    授業頻度
                </th>
                <td>
                    {frequency}
                </td>
            </tr>
            <tr>
                <th>
                    テスト
                </th>
                <td>
                    {test}
                </td>
            </tr>
        </thead>
       </table>
    </div>
        
    )

}

export default LecTable;