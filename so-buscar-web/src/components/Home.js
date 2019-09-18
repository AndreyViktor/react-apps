import React,{useState} from 'react';
import './login.css';

export default function Login({history}){

  function loginClick(){
    history.push('/login');
  }

    return(
      <div className="login-container">
        <button     
            onClick ={loginClick}
            >Login
        </button>
      </div>  
    );
}