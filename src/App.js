import React, {useState} from 'react'
// import About from './components/About'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() {
    const [mode, setMode] = useState('light')

    const toggleMode = () => {
      if(mode === 'light'){
          setMode('dark');
      }
      else{
          setMode('light');
      }
    }
    return (
        <>
            <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
            <div className="container my-5">
                <Textarea heading="Enter Text to analize"/>
                {/* <About /> */}
            </div>
        </>
    )
}

export default App
