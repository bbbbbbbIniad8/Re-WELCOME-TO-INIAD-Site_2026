type TitleProps = {
  title: string;
  author: string;
  date: string;
  category: string;
};

const Title = ({title, author, date, category}: TitleProps) => {
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
        <div style={contentStyle}>
            <div style={titleStyle}>{title}</div> 
            <div>著者: {author} 作成日: {date} カテゴリ: {category}</div>


        </div>
    )

}

export default Title;