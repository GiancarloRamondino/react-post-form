import './App.css'
import lista from './assets/lista.jsx'
import Card from './components/Card.jsx'


function App() {
  
  
  return (
    <>
      <h1>Lista</h1>
      <div className="row">
        <div className="col">
          <button className='btn btn-primary' onClick={lista}>Lista</button>
        </div>
        <div className="col">
          <div className="card">
            <Card />
          </div>
        </div>       
      </div>    
    </>
  )
}

export default App
