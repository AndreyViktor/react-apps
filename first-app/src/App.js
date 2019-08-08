import React,{ useState,useEffect } from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route  
} from 'react-router-dom';
import Axios from 'axios';

const Home = ()=>{
    return(<h1>HOME</h1>)
}
const Biblioteca = ()=>{
    return (<h1>biblioteca</h1>)
}

function App() {
  const [data,setData] = useState({});
  useEffect(()=>{
    Axios.get().then(res =>{
      setData(res.data);
    })
  })
  return (
    <Router >
      <div>
        <Header/>
        <Route path = '/' exact component={Home}/>
        <Route path = '/biblioteca' component={Biblioteca}/>
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
      
  );
}

export default App;
