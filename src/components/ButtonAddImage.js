import React, { useContext } from 'react'
import AppContext from '../context/appContext';
import {TYPES} from '../actions/appActions'
import Styles from './ButtonAddImage.module.css'

export const ButtonAddImage = () => {
    
    const {dispatch}= useContext(AppContext);

    const handleClick=()=>{
        dispatch({type:TYPES.ADD_IMAGE});
    }

    return (
        <button onClick={handleClick} className={Styles.btnAddImage}>
            Add Image
        </button>
    )
}
