export function numberAdd2(dispatch) {
    dispatch({ type: 'numberAdd2' });
}
export function numberMultiplyBy7(dispatch) {
    dispatch({ type: 'numberMultiplyBy7' });
}
export function numberDivideBy25(dispatch) {
    dispatch({ type: 'numberDivideBy25' });
}
export function numberAddN(dispatch, value) {
    dispatch({ type: 'numberAddN', payload: value });
}