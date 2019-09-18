import React,{useState} from 'react';
import QrReader from 'react-qr-reader';
import './login.css';

export default function Login({history}){

  function loginClick(){
    history.push('/login');
  }

  function QrResult(data){
        if(data){
            setQrResult(data);
        }
  }

  const [qrResult,setQrResult] = useState('no result');

    return(
      <div className="login-container">
        <button     
            onClick ={loginClick}
            >confirmar
        </button>
        <QrReader
            delay={300}
            style={{width:'30%',
                    height:'30%'}}
            onScan={QrResult}
        />
        <p>{qrResult}</p>
      </div>  
    );
}