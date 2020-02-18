import React from 'react'

function contactCard(props){
    return(
            <div className="contact-card">
                <img src={props.imgUrl}/>
                <h3>{props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
    );
}

export default contactCard