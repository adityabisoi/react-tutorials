import React from "react"
import VschoolProducts from './components/VschoolProducts'
import products from './vschoolProducts'

function App() {
    const product = products.map(item => 
        <VschoolProducts name={item.name} price={item.price} description={item.description} />
        )
    return(
        <div>
            {product}
        </div>
    );
}

export default App