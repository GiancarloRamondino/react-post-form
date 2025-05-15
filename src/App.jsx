import './App.css'
import axios from 'axios'



import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    isPublic: false,
  });

  const handleClick = () => {
    console.log("Aggiunta effettuata");
    console.log(formData);
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <h1>Lista</h1>
      <div className="row">
        <div className="col">
          <div className="card">
            <div>
              <button className='btn btn-primary' onClick={handleClick}>Inserisci</button>
            </div>
            <div>  
              <label htmlFor="" className='form-label'>Autore</label>
              <input
                type="text"
                name='author'
                id='author'
                placeholder="Autore"
                className='form-control'
                value={formData.author}
                onChange={(e) =>
                setFormData({...formData, author: e.target.value})} 
              />
            </div>
            <div>  
              <label htmlFor="" className='form-label'>Titolo</label>
              <input
                type="text"
                name='title'
                id='title'
                placeholder="Titolo"
                className='form-control'
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <label htmlFor="" className='form-label'>Corpo</label>
              <input
                type="text"
                name='body'
                id='body'
                className='form-control'
                value={formData.body}
                onChange={(e) =>
                  setFormData({ ...formData, body: e.target.value })
                }
              />
            </div>
            <div>  
              <input
                type="checkbox"
                name='isPublic'
                id='isPublic'
                className='form-control'
                 checked={formData.isPublic}
                onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
              />   
            </div>
          </div>
          
        </div>       
      </div>    
    </>
  )
}

export default App
