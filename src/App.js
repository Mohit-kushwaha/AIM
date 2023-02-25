
import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';

import Pages from './componnets/pages';
function App()
{

  const audio2 = new Audio("https://badasstechie.github.io/Clips/Siren.mp3");
  const [state, setStates] = useState(false)


  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
