import { useCallback, useState } from 'react'
import men from './men.webp';
import women from './women.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

  const [textValue, setTextValue] = useState("")
  const [beshifiedText, setBeshifiedText] = useState("")
  const handleBeshify = () => {
    let beshified = textValue.split(" ")
    let delimeters = ['🤸‍♀️','🤸‍♂️']
    let newString = ""
    if(textValue) {
      let delimiter = delimeters[Math.floor(Math.random()*delimeters.length)];
      newString = beshified.join(delimiter)
      setBeshifiedText(newString)
      notify("Beshified!")
    } else {
      notify("Lagyan mo naman ng laman Beh!")
    }
  }

  const handleClear = (e) => {
    e.preventDefault()
    setBeshifiedText("")
  }

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(beshifiedText);
  },[beshifiedText])

  const notify = (text) => toast(text);
  return (
    <div className="App">
      <header className="App-body">
        <div className='container'>
          <img src={women} className="women" alt="logo" />
          <div>
            <h1 className='title'>i-Beshifyyy mo</h1>
            <p className='subtitle'>Simple tool to beshify your text..</p>
          </div>
          <img src={men} className="men" alt="logo" />
        </div>

        <div className='actions'>
          <textarea
            type="text"
            className="textbox"
            placeholder="Enter text to beshify"
            onChange={(e) => setTextValue(e.target.value)}
            value={textValue}
            name="textValue"
            rows="3"
          />

          <button className="yellow-button" type='button' onClick={() => handleBeshify()}>Beshify</button>
          <button className="clear-button" type='button' onClick={() => handleClear()}>Clear</button>
          {beshifiedText && <button className="yellow-button" type='button' onClick={() => handleCopy()}>Copy Text</button>}
        </div>

         <p className='footer-text'>Bakit🤸‍♀️ malungkot🤸‍♂️ ang🤸‍♀️ beshy🤸‍♂️ ko🤸‍♀️</p>
      </header>
      <ToastContainer limit={3}/>
    </div>
  );
}

export default App;
