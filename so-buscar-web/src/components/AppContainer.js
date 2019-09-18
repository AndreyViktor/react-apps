import React,{useState} from 'react';
import './login.css';

export default function StockForm({history}){

  function poiConfig(){
    history.push('/app/poiform');
  }
  function stockForm(){
    history.push('/app/stockform');
  }
  function confirmation(){
    history.push('/app/confirmation');
  }

  const [username,setUsername] = useState('');

    return(
      <div className="login-container">
         <button onClick={poiConfig}>loja</button>
          <button onClick={stockForm}>estoque</button>
          <button onClick={confirmation}>comirmação</button>
      </div>  
    );
}