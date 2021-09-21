import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { UseCounter } from '../../hooks/UseCounter';
import { useFetch } from '../../hooks/useFetch';
import SectionTitle from './../../components/layout/SectionTitle';

const UseRef = _ => {

    const [ count, inc, dec ] = UseCounter(10);
    const url = 'http://files.cod3r.com.br/curso-react/estados.json';
    const response = useFetch(url)
    function showStates(states){
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exemplo #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={ _ => inc() }>+1</button>
                    <button className="btn" onClick={ _ => dec() }>-1</button>
                </div>
            </div>
            <SectionTitle title="Exemplo #02" />
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
