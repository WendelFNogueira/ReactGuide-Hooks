import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { login, numberAdd2, numberAddN, numberDivideBy25, numberMultiplyBy7 } from '../../store/actions';
import { initialState, reducer } from '../../store/config';

const UseReducer = (props) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                { state.user ? <span className="text">{state.user.name}</span> : <span className="text">Não logado</span> }
                <span className="text">{parseInt(state.number)}</span>
                <div>
                    <button className="btn" onClick={ _ => login(dispatch, "Wendel Nogueira") }>Login</button>
                    <button className="btn" onClick={ _ => numberAdd2(dispatch) }>+2</button>
                    <button className="btn" onClick={ _ => numberMultiplyBy7(dispatch) }>*7</button>
                    <button className="btn" onClick={ _ => numberDivideBy25(dispatch) }>/25</button>
                    <button className="btn" onClick={ _ => numberAddN(dispatch, -10) }>-10</button>
                    <button className="btn" onClick={ _ => numberAddN(dispatch, +10) }>+10</button>
                </div>
                
            </div>
        </div>
    )
}

export default UseReducer
