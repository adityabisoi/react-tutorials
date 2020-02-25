import React from 'react'

function Conditional(props){
    // if(props.isLoading === true){
    // return (
    //     <h1>Loading...</h1>
    // );
    // }
    // else{
    //     return (
    //         <h1>Hello World</h1>
    //     );
    // }
    return(
        <div>
            <h1>Header</h1>
            {props.isLoading ? <h1>Loading...</h1> : <h1>Hello World</h1>}
            <h1>Footer</h1>
        </div>
    );
    
}

export default Conditional