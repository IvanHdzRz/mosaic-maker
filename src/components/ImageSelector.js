import React, { useContext } from 'react'
import AppContext from '../context/appContext'
import Styles from './ImageSelector.module.css'
import { Thumbnail } from './Thumbnail'
export const ImageSelector = () => {
    const {state}= useContext(AppContext)
    const {images,imageOnFocus}=state
    return (
        <div className={Styles.imageSelector}>
            {
                images.map(({id,src})=>
                    <Thumbnail key={id} id={id} src={src} isOnFocus={id===imageOnFocus?true:false} />
                )
            }
        </div>
    )
}
