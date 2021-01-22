import MostraGif from './components/Gif'
import Botao from './components/Botao'
import { useState } from 'react';

function App() {
    const [gif, setGif] = useState(false)
    const hideGif = () => {
      setGif(false)
    }
    const showGif = () => {
      setGif(true)
    }
 return (
    <div className="App">
        {gif && 
        <div  onClick={hideGif }     >
        <MostraGif /> 
        </div>}
     <div onClick={showGif}>
        <Botao /> </div>
     </div>
  );
}

export default App;
