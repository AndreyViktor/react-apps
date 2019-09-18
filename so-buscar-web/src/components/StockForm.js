import React,{useState} from 'react';
import './login.css';

export default function StockForm({history}){

  function handleSubmit(e){
    e.preventDefault();
    history.push('/');
  }

  const [username,setUsername] = useState('');

    return(
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
          placeholder="stock data form"
          value={username}
          onChange={e=>setUsername(e.target.value)}/>
          <button type="submit">stock data form</button>
        </form>
      </div>  
    );
}