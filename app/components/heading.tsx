import React from "react";

type Props = {
  children: React.ReactNode;
};

const SubH = ({children} : Props) =>{
    const subHstyle = {
        marginLeft: '1rem',
        borderBottom: '2px black solid',
        fontSize:20,
        fontWeight: 500,
        paddingLeft: '1rem',
        backgroundColor: 'rgb(7, 255, 172)',
        borderRadius: 5,
    }
    return (
        <h2 style={subHstyle}>
            {children}
        </h2>
    )
}

const H = ({children}: Props) => {
    const Style = {
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
        <div style={Style}>
            {children}
        </div>
    )

}

export { H, SubH};