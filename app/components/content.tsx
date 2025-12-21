type ContentProps = {
  children: React.ReactNode; 
};

const Content = ({children}: ContentProps) => {
    const Style = {
        margin: 10,
        padding: 10,
        width: '70vw',
        whiteSpace: 'pre-wrap',
    } as const;
    return (
        <div style={Style} className='content'>
            {children}
        </div>
    )

}

export default Content;