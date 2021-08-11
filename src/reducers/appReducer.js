import {TYPES} from '../actions/appActions'
import defaultImageValues from '../helpers/imageDefaultValues'
import {v4} from 'uuid'

export  const initialState = {
    gridSettings:{
        gap: 0,
        rows: 4,
        cols: 4,
    },
    images: [],
    imageOnFocus:null
}
 
export  const appReducer = (prevState = {}, action) => {
    switch(action.type) {
        //change grid settings
        case TYPES.SET_GAP:
            return {
                ...prevState,
                gridSettings:{
                    ...prevState.gridSettings,
                    gap: action.payload
                }
            }
        case TYPES.SET_ROWS:
            return {
                ...prevState,
                gridSettings:{
                    ...prevState.gridSettings,
                    rows: action.payload
                }
            }
        case TYPES.SET_COLS:
            return {
                ...prevState,
                gridSettings:{
                    ...prevState.gridSettings,
                    cols: action.payload
                }
            }
        //Image CRUD
        case TYPES.ADD_IMAGE:
            const idGenerated = v4()
            return {
                ...prevState,
                images: [...prevState.images,{id:idGenerated, ...defaultImageValues}],
                imageOnFocus:idGenerated
            }
        case TYPES.EDIT_IMAGE:
            
            return {
                ...prevState,
                images:[
                    ...prevState.images.filter(({id})=>id!==action.payload.id),
                    {
                        id:action.payload.id,
                        row:action.payload.row,
                        col:action.payload.col,
                        rowSpan:action.payload.rowSpan,
                        colSpan:action.payload.colSpan,
                        src:action.payload.src,
                    }
                ]
            }
        case TYPES.DELETE_IMAGE:
            const newImages = prevState.images.filter(({id})=>id!==action.payload)
            return {
                ...prevState,
                images:newImages,
                imageOnFocus:newImages[0]?newImages[0].id:null
            }    
        //Change image focused
        case TYPES.CHANGE_IMAGE_FOCUS:
            return {
                ...prevState,
                imageOnFocus:action.payload
            }        
        default: return prevState;
    }

}