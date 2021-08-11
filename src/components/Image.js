import React, { useContext } from 'react'
import AppContext from '../context/appContext'
import {TYPES} from '../actions/appActions'

const Image = ({src,col=1,row=1,colSpan=1,rowSpan=1,id}) => {
    
    const{dispatch}= useContext(AppContext)

    const handleClick=()=>{
        dispatch({type:TYPES.CHANGE_IMAGE_FOCUS,payload:id })
    }

    const style={
        height:'100%',
        width:'100%',
        objectFit:'cover',
        zIndex:'100',
        gridColumn:`${col} /  ${colSpan+col} `,
        gridRow:`${row} /  ${rowSpan+row} `,
        transition:'all 0.3s'
    }

    return (
        <img src={src} alt={id} style={style} onClick={handleClick}/>
    )
}

export default Image;
