import React from 'react'

function MyApp(){
    const date = new Date()
    const hours = date.getHours()
    let message

    const styles = {
        fontSize:20
    }

    if(hours<12){
        message = "Good Morning" 
        styles.color = "red"
    }
    else if(hours>12 && hours< 18){
        message = "Good Afternoon"
        styles.color = "blue"
    }
    else{
        message = "Good Evening"
        styles.color = "green"
    }
    
    return (
    <h1 style={styles}>{message}</h1>
    )
}

export default MyApp