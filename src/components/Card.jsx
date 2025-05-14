import { useState } from 'react';


function Card({}) {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    isPublic: ''
  });

  return (
    <div className="card">
      <input
        type="text"
        placeholder="Autore"
        className='form-control'
        value={formData.author}
        onChange={(e) =>
        setFormData({...formData, author: e.target.value})} 
      />
      <input
        type="text"
        placeholder="Titolo"
        className='form-control'
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
      />
      <textarea
        placeholder="Corpo"
        className='form-control'
        value={formData.body}
        onChange={(e) => setFormData({...formData, body: e.target.value})}
      />
      <input
        type="text"
        placeholder="Pubblico"
        className='form-control'
        value={formData.isPublic}
        onChange={(e) => setFormData({...formData, isPublic: e.target.value})}
      />
    </div>
  )
};

export default Card