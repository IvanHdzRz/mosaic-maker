import React from 'react'

const RangeInput = ({min,max,step,id,onChange,value}) => {
    
    return (
        <div>
            <input 
                type="range" 
                id={id} 
                name={id} 
                min={min} 
                max={max}  
                step={step} 
                onChange={onChange}
                value={value} 
            />
            <span>
                {value}
            </span>
        </div>
    )
}

export default RangeInput
