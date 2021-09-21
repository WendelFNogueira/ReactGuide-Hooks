import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext';
import SectionTitle from './../../components/layout/SectionTitle';
import { AppContext } from './../../data/Store';
const UseContext = (props) => {

    const { state, setState } = useContext(DataContext);

    function addNumber(delta){
        setState({
            ...state,
            number: state.number + delta
        })
    }

    const { text, number, setNumber, setText } = useContext(AppContext);

    useEffect(_ => {
        if(number > 1250) setText("Mudança de contexto");
    }, [number]);

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exemplo #01" />
                <div className="center">
                    <span className="text">{state.text}</span>
                    <span className="text">{state.number}</span>

                    <div>
                        <button className="btn" onClick={ _ => addNumber(-1) }>-1</button>
                        <button className="btn" onClick={ _ => addNumber(+1) }>+1</button>
                    </div>
                </div>

            <SectionTitle title="Exemplo #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={ _ => setNumber(number-1) }>-1</button>
                    <button className="btn" onClick={ _ => setNumber(number+1) }>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
