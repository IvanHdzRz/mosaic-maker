import React, { useContext } from 'react'
import EmptyGridCell from './EmptyGridCell'
import AppContext from '../context/appContext'
import Image from './Image';

const EditableGrid = () => {
    const {state}= useContext(AppContext);
    const {gridSettings,images}=state;
    const {cols:columns,rows,gap}=gridSettings;
    
    const style={
        backgroundColor:"white",
        height:'100%',
        width:'100%',
        display: 'grid',
        gridTemplateColumns:`repeat(${columns} ,minmax(0,1fr))`,
        gridTemplateRows:`repeat(${rows} ,minmax(0,1fr))`,
        gap:`${gap}rem`
    }

    const cells=new Array(columns*rows).fill(null);

    return (
        <div style={style}>
            {cells.map((val,index)=>
                <EmptyGridCell 
                    key={index} 
                    row={(Math.floor(index/columns))+1} 
                    column={(index%columns)+1}
                />
            )}
            {images.map(({id,src,row,col,rowSpan,colSpan})=>
                <Image key={id} id={id} src={src} row={row} col={col} rowSpan={rowSpan}colSpan={colSpan}/>
            )
            }
        </div>
    )
}

export default EditableGrid;

