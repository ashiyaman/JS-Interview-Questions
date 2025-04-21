import { useState } from 'react'
import './App.css'

function App() {
  const [limit, setLimit] = useState(1)
  const [data, setData] = useState()

  const getCatImages = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
      .then(response => response.json())
      .then(data => setData(data))
  }
  console.log(data, limit)

  return (
    <>
      <section>
        <h1>Hello Kitty Images</h1>
        <input type='number' autoFocus onChange={(e) => setLimit(e.target.value)} placeholder='Image limit'/>
        <button onClick={() => getCatImages()}>Get Cat Images</button>
          {data && 
            <ul>
              {data.map(cat => <li><img src={cat.url} key={cat.id} alt={cat.id}/></li>)}
            </ul>
          }
      </section> 

    </>
  )
}

export default App
