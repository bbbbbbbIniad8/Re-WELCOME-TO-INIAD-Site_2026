type textProps = {
    children: React.ReactNode;
};

const Text = ({children}: textProps) => {
    const textStyle = {
        whiteSpace: 'pre-wrap', 
        margin: 5,
    } as const;
    return (
        <div style={textStyle}>
            {children}
        </div>
    )

}

export default Text;