import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("/api")
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <h1>Up and running</h1>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
