import { useState } from 'react'
import './App.css'

function App() {
  const {formData, setFormData} = useState({
    autor: '',
    title: '',
    body: '',
    public: ''
  })

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <input
              type="text"
              placeholder="Autore"
              className='form control'
              value={formData.autor}
              onChange={(e) => setFormData({...formData})} 
            />
            <input
              type="text"
              placeholder="Titolo"
              className='form control'
              value={formData.title}
              onChange={(e) => setFormData({...formData})}
            />
            <textarea
              placeholder="Corpo"
              className='form control'
              value={formData.body}
              onChange={(e) => setFormData({...formData})}
            />
            <input
              type="text"
              placeholder="Pubblico"
              className='form control'
              value={formData.public}
              onChange={(e) => setFormData({...formData})}
            />
          </div>
        </div>       
      </div>    
    </>
  )
}

export default App
