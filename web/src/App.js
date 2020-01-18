import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css'
import './Sidebar.css'
import './Main.css'
import api from './services/services/api'

import DevItem from './components/DevItem/index'
import DevForm from './components/DevForm/index'

/*
useStade


Componete -> é uma função que retorna algum html, css, javascript  ()
Componete sempre vai ter a primeira letra maiuscula
Usa ele que nem usa uma teag no html, um componetne por arquivo
não interfere no restante da plicação
*/

/*Estado -> uma informação que o componente vai manipular
-> informação mantida pelo componente (Lembrar: Imutabilidade)
*/

/*
Propriedade -> informações que um componete PAI(App) passa para o componente filho(Header)
*/

//usa - se o fragmente quando precisa colocar uam componete <></>
//toda função que propria de um compomnente a gente cria dentro dele mesmo

/* 
function App() {

  const [couter, setCouter] = useState(0)//variavel, função para atualizar os valores

  function incrementCount()
  {
    setCouter(couter + 1)
  }

  return (
    <>
<h1>Contandor: {couter}</h1>
      <button onClick={incrementCount}>Incrementar</button>
      {/*<Header title="Meu painel - 5" />}
    </>
  );
}
*/




function App() {

  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }

    loadDevs()
  }, [])

  async function handleAddDev(data) {

    const response = await api.post('/devs', data)



    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div >
  );
}
export default App;
