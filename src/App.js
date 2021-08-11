import EditableGrid from './components/EditableGrid'
import './App.css';
import GridSettings from './components/GridSettings';
import {  useState } from 'react';
import { Modal } from './components/Modal';
import {AppState} from './appState/appState';
import { ButtonAddImage } from './components/ButtonAddImage';
import { ImageEditor } from './components/ImageEditor';
import settingsIcon from './assets/settings.png';
import { ImageSelector } from './components/ImageSelector';

function App() {
  
  const [settingsIsOpen, setsettingsIsOpen] = useState(false)
  
  return (
    <AppState>
      <div className="App">
        
        <h1 className="AppTitle">Mosaic Maker</h1>
        
        <button  onClick={()=>{setsettingsIsOpen(true)}} className="btnGridSettings">
          <img src={settingsIcon} alt="settings" />
          <span>Settings</span>
        </button>
        {
          settingsIsOpen && 
          <Modal close={()=>{setsettingsIsOpen(false)}} >
            <GridSettings/>
          </Modal>
        }
        
        <div className="customGridContainer">
          <EditableGrid />
        </div>
        <div className="btnAddImage">
          <ButtonAddImage />
        </div>
        
        <div className="imageSlider">
          <ImageSelector />
        </div>

        <div className="imageEditor">
          <ImageEditor />
        </div>

      </div>
      
    </AppState>

    
  );
}

export default App;
