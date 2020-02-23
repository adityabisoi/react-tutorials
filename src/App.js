import React from "react"

function myFunction() {
    console.log("clicked")
}


function App(){
    return(
        <div>
            <h1>Hello World</h1>
            <button onClick={myFunction}>Click</button>
        </div>
    );
}

export default App