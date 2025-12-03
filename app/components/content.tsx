type ContentProps = {
  children: React.ReactNode; 
};

const Content = ({children}: ContentProps ) => {
    const contentStyle = {
        margin: 10,
        padding: 10,
        width: '70vw',
        whiteSpace: 'pre-wrap',
    } as const;
    return (
        <div style={contentStyle} className='content'>
            {children}
        </div>
    )

}

export default Content;