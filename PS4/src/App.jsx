import { useState } from 'react'


function App() {
  const [searchDirectoryId, setSearchDirectoryId] = useState('')
  const [data, setData] = useState()
  const [timer, setTimer] = useState(0)
  const [timerId, setTimerId] = useState()

  const getData = () => {
    
    if(searchDirectoryId === '' || isNaN(searchDirectoryId)) return
    fetch(`https://jsonplaceholder.typicode.com/users/${searchDirectoryId}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  }

  const startTimerHandler = () => {
    setTimerId(setInterval(() => setTimer(prev => prev + 1), 1000))
  }

  const stopTimerHandler = () => {
    clearInterval(timerId)
  }

  const resetTimerHandler = () => {
    setTimer(0)
    clearInterval(timerId)
  }

  return (
    <div style={{ margin: 'auto', minWidth: '100%'}}>
      <div>
        <h1>Search Directory</h1>
        <input type='text' autoFocus onChange={(e) => setSearchDirectoryId(e.target.value)}/>
        <button onClick={() => getData()}>Get Data</button>
        {data &&
          <div>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Username: {data.username}</p>
            <p>Address: {data.address.suite}, {data.address.street}, {data.address.city}, {data.address.zipcode}</p>
          </div>
        }
      </div>
      <div>
        <h1>Timer</h1>
        <button onClick={() => startTimerHandler()}>Start Timer</button>
        <button onClick={() => stopTimerHandler()}>Stop Timer</button>
        <button onClick={() => resetTimerHandler()}>Reset Timer</button>
        <p>{timer}</p>
      </div>
    </div>  
  )
}

export default App
