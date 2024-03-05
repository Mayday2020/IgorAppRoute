import React from 'react'
import {Navigate, useParams} from 'react-router-dom'
import {adidasArr, AdidasItem} from './Adidas'
import {PATH} from "../../App";

const Model = () => {
    const params = useParams()
    console.log(params.id)
    const currentModel = adidasArr.find(el => el.id === Number(params.id))

    return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px'}}>
        { currentModel
            ? <>
                <h4>{currentModel.model}</h4>
                <p>{currentModel.collection}</p>
                <p>{currentModel.price}</p>
                <img
                    src={currentModel.picture}
                    alt={currentModel.model}
                    style={{width: '400px', height: 'auto'}}
                />
            </>
            : <h4>Такой модели не существует</h4>
        }
    </div>
}

export default Model