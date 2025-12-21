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

export default Text;