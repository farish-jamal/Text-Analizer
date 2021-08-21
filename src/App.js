import React, {useState} from 'react'
// import About from './components/About'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() {
    const [mode, setMode] = useState('light')
    const [greenMode, setGreenMode] = useState('light')
    const [yellowMode, setYellowMode] = useState('light')
    const [redMode, setRedMode] = useState('light')

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
    const togglegreenMode = () => {
      if(mode === 'light' || redMode === 'danger' || mode === 'dark' || yellowMode === 'warning'){
        setGreenMode('success');
          document.body.style.backgroundColor = 'green';
      }
    }
    const toggleyellowMode = () => {
      if(mode === 'light' || redMode === 'danger' || greenMode === 'success' || mode === 'dark'){
        setYellowMode('warning');
          document.body.style.backgroundColor = 'yellow';
      }
    }
    const toggleredMode = () => {
      if(mode === 'light' || mode === 'dark' || greenMode === 'success' || yellowMode === 'warning'){
        setRedMode('danger');
          document.body.style.backgroundColor = 'red';
      }
    }
    return (
        <>
            <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} greenMode={greenMode} togglegreenMode={togglegreenMode} yellowMode={yellowMode} toggleyellowMode={toggleyellowMode} redMode={redMode} toggleredMode={toggleredMode}/>
            <div className="container my-5">
                <Textarea heading="Enter Text to analize" mode={mode} greenMode={greenMode} yellowMode={yellowMode} redMode={redMode}/>
                {/* <About /> */}
            </div>
        </>
    )
}

export default App
