
import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';
import welcome from './assets/welcome.mp3'
function App()
{
  const audio = new Audio(welcome);
  const audio2 = new Audio("https://badasstechie.github.io/Clips/Siren.mp3");
  const [state, setStates] = useState(false)
  useEffect(() =>
  {
    Swal.fire({
      title: 'Welcome to AIM',
      text: 'Greetings To you',
      icon: 'Success',
      // showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Greetings!!!'
    }).then(async (result) =>
    {
      if (result.isConfirmed)
      {
        await audio.play()
        console.log(audio)
        // setStates(true)
        // do something here when user confirms action
      }
    });

    const myBtn = document.getElementById('greetBttn')
    myBtn.click()

  }, [])





  function handleButtonClick()
  {
    console.log("Im clicked");

    audio.play();
    // setIsPlaying(true);

  }

  return (
    <div className="App">
      <div>
      </div>
    </div>
  );
}

export default App;
