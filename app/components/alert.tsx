type Props = {
    children: React.ReactNode;
    backColor: string,
    fontColor: string
}

const Alart = ({children, backColor, fontColor}: Props) =>{
    const backStyle = {
        backgroundColor: backColor,
        border: `1px solid ${fontColor}`,
        color: `${fontColor}`,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        itemAlign: 'center'
    } as const;
    const headingStyle = {
        fontSize: 20,
        fontWeight: 600,
        padding: 0,
    } as const;
    
    return (
        <div style={backStyle}>
            <div style={headingStyle}>{children}</div>
        </div>
    )
}


const Incomplete = () => {
    return (
        <Alart backColor="yellow" fontColor="red">注意: この記事は未完成です!!!</Alart>
    )
}

export {Incomplete};