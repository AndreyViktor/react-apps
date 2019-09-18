import React,{useState} from 'react';
import './login.css';

export default function PoiDataForm({history}){

  function handleSubmit(e){
    e.preventDefault();
    history.push('/stockform');
  }

  const [username,setUsername] = useState('');

    return(
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
          placeholder="poi data form"
          value={username}
          onChange={e=>setUsername(e.target.value)}/>
          <button type="submit">poi data form</button>
        </form>
      </div>  
    );
}