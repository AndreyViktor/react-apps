import React,{useState} from 'react';
import './login.css';

export default function Login({history}){

  function handleSubmit(e){
    e.preventDefault();
    console.log(username);
    history.push('/app/poiform');
  }

  const [username,setUsername] = useState('');

    return(
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
          placeholder="digite seu usuario"
          value={username}
          onChange={e=>setUsername(e.target.value)}/>
          <button type="submit">Entrar</button>
        </form>
      </div>  
    );
}