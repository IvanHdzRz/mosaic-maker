import React from 'react'

const EmptyGridCell = ({row=1,column=1}) => {
    const style={
        border:'1px dashed gray',
        width:'100%',
        height:'100%',
        boxSizing:'border-box',
        zIndex:'10',
        gridColumn: `${column} / ${column+1}`,
        gridRow: `${row} / ${row+1}`,

    }
    return (
        <div style={style}>
            
        </div>
    )
}

export default EmptyGridCell
