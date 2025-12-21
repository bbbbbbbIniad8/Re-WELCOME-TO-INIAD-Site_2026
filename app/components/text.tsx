type Props = {
    children: React.ReactNode;
};

const Text = ({children}: Props) => {
    const Style = {
        whiteSpace: 'pre-wrap', 
        paddingLeft: '1rem',
        margin: 5,
    } as const;
    return (
        <div style={Style}>
            {children}
        </div>
    )
}

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

export {Text, TextP};