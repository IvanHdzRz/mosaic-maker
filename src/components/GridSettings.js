import React, { useContext } from 'react'
import RangeInput from './RangeInput';
import styles from './GridSettings.module.css'
import AppContext from '../context/appContext';
import { TYPES } from '../actions/appActions';


const GridSettings = () => {
    const {state,dispatch}=useContext(AppContext);
    const {gridSettings}=state;
    const {cols,rows,gap}=gridSettings
    
    const handleChange = (e) => {
        const {target}=e;
        
        switch(target.name) {
            case 'cols':
                dispatch({type:TYPES.SET_COLS,payload:target.value});
                break;
            case 'rows':
                dispatch({type:TYPES.SET_ROWS,payload:target.value});
                break;
            case 'gap':
                dispatch({type:TYPES.SET_GAP,payload:target.value});
                break;
            default: 
                break;
        }
    }

    return (
        <div className={styles.settings}>
            <h2>Grid settings</h2>
            
            <h3>Rows</h3>
            <RangeInput id={"rows"} min={1} max={12} step={1} value={rows} onChange={handleChange} />
            
            
            <h3>Columns</h3>
            <RangeInput id={"cols"} min={1} max={12} step={1} value={cols} onChange={handleChange} />
            
            <h3>Gap</h3>
            <RangeInput id={"gap"} min={0} max={2} step={0.2} value={gap} onChange={handleChange} />

        </div>
    )
}

export default GridSettings;