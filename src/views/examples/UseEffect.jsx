import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';

function calculateFactorial(num) {
    const n = parseInt(num);
    if(n<0) return -1;
    if(n===0) return 1;
    return calculateFactorial(n - 1) * n;
}

// function EvenOrOdd(num) {
//     const n = parseInt(num);
//     if(n%2===0) return "Par";
//     return "Ímpar";
// }

const UseEffect = (props) => {

    const [ number, setNumber ] = useState(1);
    const [ factorial, setFactorial ] = useState(1);
    const [ status, setStatus ] = useState("");

    useEffect( _ => {
        if(factorial>1000000) document.title = "Por essa você não esperava ;)"
    });

    useEffect(_ => {
        setFactorial(calculateFactorial(number))
    }, [number]);

    useEffect( _ => {
        setStatus(number%2===0 ? "Par" : "Ímpar")
        // setStatus(EvenOrOdd(number))
    }, [ number ]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exemplo #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={ e => setNumber(e.target.value) }/>
            </div>

            <SectionTitle title="Exemplo #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
