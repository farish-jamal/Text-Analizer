import React, { useState } from 'react'
import Alert from './components/Alert'
import About from './components/About'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)
    const [greenMode, setGreenMode] = useState('light')
    const [yellowMode, setYellowMode] = useState('light')
    const [redMode, setRedMode] = useState('light')

    const toggleMode = () => {
        if (mode === 'light' || mode === 'danger' || mode === 'success' || mode === 'warning') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert('success', 'Dark mode has been enabled!');
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('success', 'Light mode has been enabled!');
        }
    }
    const togglegreenMode = () => {
        if (mode === 'light' || redMode === 'danger' || mode === 'dark' || yellowMode === 'warning') {
            setGreenMode('success');
            document.body.style.backgroundColor = 'green';
            showAlert('success', 'Green mode has been enabled!');
        }
    }
    const toggleyellowMode = () => {
        if (mode === 'light' || redMode === 'danger' || greenMode === 'success' || mode === 'dark') {
            setYellowMode('warning');
            document.body.style.backgroundColor = 'yellow';
            showAlert('success', 'Yellow mode has been enabled!');
        }
    }
    const toggleredMode = () => {
        if (mode === 'light' || mode === 'dark' || greenMode === 'success' || yellowMode === 'warning') {
            setRedMode('danger');
            document.body.style.backgroundColor = 'red';
            showAlert('success', 'Red mode has been enabled!');
        }
    }

    const showAlert = (type, message) => {
        setAlert({
            message: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    return (
        <>
            <Router>
                <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} greenMode={greenMode} togglegreenMode={togglegreenMode} yellowMode={yellowMode} toggleyellowMode={toggleyellowMode} redMode={redMode} toggleredMode={toggleredMode} />
                <Alert alert={alert} />
                <Switch>
                    <Route exact path="/about">
                        <About mode={mode} />
                    </Route>
                    <Route exact path="/">
                        <div className="container my-5">
                            <Textarea heading="Enter Text to analize" mode={mode}  showAlert={showAlert} />
                            {/* <About /> */}
                        </div>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
