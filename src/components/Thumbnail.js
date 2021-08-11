import React, { useContext } from 'react'
import { TYPES } from '../actions/appActions'
import AppContext from '../context/appContext'
import closeIcon from '../assets/cancel.png'
import Styles from './Thumbnail.module.css'

export const Thumbnail = ({isOnFocus,src,id}) => {
    const{dispatch}= useContext(AppContext)
    
    const setFocus=(e)=>{
        e.target === e.currentTarget &&
        dispatch({type:TYPES.CHANGE_IMAGE_FOCUS,payload:id})
    }
    const deleteImage=()=>{
        dispatch({type:TYPES.DELETE_IMAGE,payload:id})
    }
    console.log(isOnFocus)
    return (
        <div  className={Styles.thumbnailContainer}>
            <img src={closeIcon} alt="close" className={Styles.closeIcon} onClick={deleteImage} />
            <img src={src} alt={id} onClick={setFocus} className={`${Styles.thumbnail} ${isOnFocus?Styles.focus:""}`}/>
        </div>
    )
}
