import React from 'react'

function VschoolProducts(props){
    return(
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Price: {props.price}</h3>
            <h3>Description: {props.description}</h3>
            <hr></hr>
        </div>
    );
}

export default VschoolProducts