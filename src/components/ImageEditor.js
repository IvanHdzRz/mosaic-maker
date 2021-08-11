import React, { useContext } from 'react'
import { TYPES } from '../actions/appActions'
import AppContext from '../context/appContext'
import Styles from './ImageEditor.module.css'

export const ImageEditor = () => {
    const {state,dispatch}= useContext(AppContext)
    const {imageOnFocus,images}=state
    const currentImageProps= images.find(({id})=>id===imageOnFocus) || {}
    const {row,col,colSpan,rowSpan,src}=currentImageProps
    
    //edit current image props
    const handleChange=(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        dispatch({
            type:TYPES.EDIT_IMAGE,
            payload:{
                ...currentImageProps,
                [e.target.name]:
                    e.target.name==="src"?
                    e.target.value: 
                    parseInt(e.target.value)
            }
        })
    }

    return (
        <>
        {imageOnFocus !== null &&
            <div className={Styles.editBody}>
                <div className={Styles.editSrc}>
                    <h3 className={Styles.titleSeccion}>Url image:</h3>
                    <input type="text" name={"src"} id={"src"}value={src} onChange={handleChange}/>
                </div>
                
                <div className={Styles.editLayout}>
                    <h3 className={Styles.titleSeccion}>Position</h3>
                    <div className={Styles.inputLayouts}>
                        <label htmlFor="row">Row </label>
                        <input type="number" name={"row"} id={"row"} value={row} onChange={handleChange}/>
                        <label htmlFor="col">Col </label>
                        <input type="number" name={"col"} id={"col"} value={col} onChange={handleChange}/>
                    </div>

                </div>
                
                <div className={Styles.editLayout}>
                    <h3 className={Styles.titleSeccion}>Size</h3>
                    <div className={Styles.inputLayouts}>
                        <label htmlFor="rowSpan">Height </label>
                        <input type="number" name={"rowSpan"} id={"rowSpan"} value={rowSpan} onChange={handleChange}/>
                        <label htmlFor="colSpan">Width </label>
                        <input type="number" name={"colSpan"} id={"colSpan"} value={colSpan} onChange={handleChange}/>
                    </div>
                </div>
            </div>
        }
        </>
    )
    
        
        
}
