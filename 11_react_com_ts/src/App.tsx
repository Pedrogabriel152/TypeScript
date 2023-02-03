import React from 'react';

// 4 - Importação de Componentes
import FirstComponent from './Components/FirtComponent';

// 5 - desestruturando props
import { SecondComponent } from './Components/SecondComponent';
import { Destructuring, Category } from './Components/Destructuring';

// 6 - UseState
import State from './Components/State';

function App() {

  // 1 - Variaveis
  const name: string = "Pedro"
  const age: number = 20
  const isWorking: boolean = true

  // 2 - Funções em componentes
  const userGreeting = (name:string): string => {
    return `Olá, ${name}`
  }

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking &&
        <p>Está trabalhando</p>
      }

      <h3>{userGreeting(name)}</h3>

      <FirstComponent />
      <SecondComponent name='Segundo' />
      <Destructuring 
        title='Primeiro Post' 
        comentsQty={156} 
        content='Algum conteudo' 
        tags={[
          "ts",
          "js"
        ]}
        category={Category.TS}
      />

        <Destructuring 
          title='Segundo Post' 
          comentsQty={2} 
          content='Mais outro conteudo' 
          tags={[
            "ts",
            "js"
          ]}
          category={Category.JS}
        />

        <State />

    </div>
  );
}

export default App;
