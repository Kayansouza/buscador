import { useState } from 'react';
import{FiSearch } from 'react-icons/fi';
import "./styles.css";

import api from './services/api'

function App() {
  
const [input, setIpunt] = useState('')
const [cep,setCep] = useState({});



 async function HandleSearch(){
  // 01001000/json/
  
  if (input ===''){
    alert("preencha algum cep")
     return;
  }
   try{
     const response  = await api.get(`${input}/json`)
     setCep(response.data)
     setIpunt("");

   }catch {
 alert ('aaaaaa meu nobre esse cep nâo existe')
 setIpunt("")
   }
}

  return (
    <div className="container">
        <h1 className="title">buscador Cep</h1>
        
        <div className="ContainerInput">
          <input 
          type="text"
          placeholder="Digite seu Cep..."
          value={input}
          onChange={(e)=> setIpunt(e.target.value)}
          />

          <button className="ButtonSearch" onClick={HandleSearch}>
           <FiSearch size={25} color="#fff"/>
          </button>
        </div>

        {Object.keys(cep).length > 0 && (
           <main className='main'>
           <h2>Cep:{cep.cep}</h2>
 
           <span>{cep.logradouro}</span>
           <span>complemento {cep.complemento}</span>
           <span>{cep.bairro}</span>
           <span>{cep.localidade}- {cep.uf}</span>
         </main>
        )}
    
    </div>
  );
}
export default App;

