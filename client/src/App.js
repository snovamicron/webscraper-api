import { useState } from 'react'
import axios from 'axios'


function App() {
  const [text, setText] = useState('')
  const [load, setLoad] = useState(false)
  const [msg, setMsg] = useState(false)
  const callScraper = async () => {
    try {
      const response = await axios({
        url: "http://localhost:4000/api/v1/data",
        method: 'POST',
        headers: {
          'Product-Link': text
        }
      })
      console.log(response.data);
      setLoad(false)
      setMsg(true)
    } catch (error) {
      console.log(`error:${error}`)
    }
  }
  const handleClick = () => {
    callScraper()
    setText('')
    setLoad(true)
    setMsg(false)
  }
  return (
    <>
      <p
        style={{
          fontWeight: 'bolder',
          fontSize: '3rem',
          width: '31vw',
          margin: '20px auto'
        }}
      >
        THE WEB SCRAPER
      </p>
      <input
        type="text"
        style={{
          width: 500,
          margin: '0 auto',
          display: 'block',
          height: 40,
          fontSize: '1.3rem',
          padding: 15,
          marginTop: 70
        }}
        placeholder="Enter the product link"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        style={{
          width: 150,
          margin: '0 auto',
          display: 'block',
          height: 35,
          fontSize: '1rem',
          marginTop: 20
        }}
        onClick={handleClick}
      >
        Click to Scrape
      </button>
      <p
        style={{
          fontWeight: 'bolder',
          fontSize: '2rem',
          width: '9vw',
          margin: '20px auto',
          color:'blue',
          display: load?'block':'none'
        }}
      >
        Loading...
      </p>
      <p
        style={{
          fontWeight: 'bolder',
          fontSize: '1.5rem',
          width: '25vw',
          margin: '20px auto',
          display: msg?'block':'none'
        }}
      >
        scrape data have saved on database !
      </p>
    </>
  );
}

export default App;
