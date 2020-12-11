import './App.css';
import FullName from './Profil/fullName'
import Bio from './Profil/Bio'
import Profession from './Profil/Profession'
import react, { useState } from 'react'

function App() {
  const textpro = "Prolific full stack web developer with a passion "


  const [isVisible, setisVisible] = useState(false)
  const togglevisibility = () => {
    setisVisible(!isVisible)
    console.log(isVisible)
  }

  return (
    <div className="App" >
      <button onClick={togglevisibility}>
        {isVisible ? "hide profil" : "show profil"}
      </button>
      {isVisible && <FullName />
      }


      <Bio job="web developer" />
      <Profession textpro={textpro} />
    </div>
  );

}
export default App;



