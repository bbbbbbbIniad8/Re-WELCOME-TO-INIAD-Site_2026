import React from "react";

type Props = {
  children: React.ReactNode;
};

const H = ({children}: Props) => {
    const headerStyle = {
        margin: 5,
        borderLeft: "1rem  solid aqua",
        fontWeight: 400,
        borderRadius: 5,
        fontSize: 20,
        padding: '5px',
        background: 'black',
        color: 'aqua'
    }
    return (
        <div style={headerStyle}>
            {children}
        </div>
    )

}

export default H;