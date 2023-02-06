import React, { createContext } from 'react';

// 4 - Importação de Componentes
import FirstComponent from './Components/FirtComponent';

// 5 - desestruturando props
import { SecondComponent } from './Components/SecondComponent';
import { Destructuring, Category } from './Components/Destructuring';

// 6 - UseState
import State from './Components/State';

// 10 - Utilizando Context
import Context from './Components/Context';

// 8 - type
type textOrNull = string | null

// 9 - Context
interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - Variaveis
  const name: string = "Pedro"
  const age: number = 20
  const isWorking: boolean = true

  // 2 - Funções em componentes
  const userGreeting = (name:string): string => {
    return `Olá, ${name}`
  }

  // 8 - type
  const myText: textOrNull = `Tem algum texto aqui`;
  let mySecondText: textOrNull = null;

  // 9 - context 
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: "Express",
    projects: 5
  };



  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking &&
          <p>Está trabalhando</p>
        }
        // 8 - type
        const myText: textOrNull = `Tem algum texto aqui`;
        let mySecondText: textOrNull = null;

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

          { myText &&
            <p>Tem valor na variavel</p>
          }

          {mySecondText &&
            <p>Tem valor na variavel</p>
          }

          <Context />

      </div>
    </AppContext.Provider>
  );
}

export default App;
