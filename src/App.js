import React, {useState} from 'react'
// import About from './components/About'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() {
    const [mode, setMode] = useState('light')
    const [gmode, setGMode] = useState('light')
    const [ymode, setYMode] = useState('light')
    const [rmode, setRMode] = useState('light')

    const toggleMode = () => {
      if(mode === 'light' || mode === 'danger' || mode === 'success' || mode === 'warning'){
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
      }
      else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
      }
    }
    const togglegMode = () => {
      if(gmode === 'light' || gmode === 'danger' || gmode === 'dark' || gmode === 'warning'){
          setGMode('success');
          document.body.style.backgroundColor = 'green';
      }
      else{
          setGMode('light');
          document.body.style.backgroundColor = 'white';
      }
    }
    const toggleyMode = () => {
      if(ymode === 'light' || ymode === 'danger' || ymode === 'success' || ymode === 'dark'){
          setYMode('warning');
          document.body.style.backgroundColor = 'yellow';
      }
      else{
          setYMode('light');
          document.body.style.backgroundColor = 'white';
      }
    }
    const togglerMode = () => {
      if(rmode === 'light' || rmode === 'dark' || rmode === 'success' || rmode === 'warning'){
          setRMode('danger');
          document.body.style.backgroundColor = 'red';
      }
      else{
          setRMode('light');
          document.body.style.backgroundColor = 'white';
      }
    }
    return (
        <>
            <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} gmode={mode} togglegMode={togglegMode} ymode={mode} toggleyMode={toggleyMode} rmode={mode} togglerMode={togglerMode}/>
            <div className="container my-5">
                <Textarea heading="Enter Text to analize" mode={mode} gmode={gmode} ymode={ymode} rmode={rmode}/>
                {/* <About /> */}
            </div>
        </>
    )
}

export default App
