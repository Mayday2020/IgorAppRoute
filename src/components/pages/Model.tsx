import React from 'react'
import { useParams } from 'react-router-dom'
import {adidasArr, AdidasItem} from './Adidas'


const Model = () => {
    const params = useParams()
    console.log(params.id)
    const modelItem = params.id ? +params.id - 1: 999

    return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px'}}>
        <h4>{adidasArr[modelItem].model}</h4>
        <p>{adidasArr[modelItem].collection}</p>
        <p>{adidasArr[modelItem].price}</p>
        <img
            src={adidasArr[modelItem].picture}
            alt={adidasArr[modelItem].model}
            style={{width: '400px', height: 'auto'}}
        />
    </div>
}

export default Model