import React from 'react'

function Header(){
    const styles={
        color:"red",
        backgroundColor:"yellow"
    }
    return(
        <nav>
            <h1 style={styles}>Navbar</h1>
        </nav>
    )
}

export default Header