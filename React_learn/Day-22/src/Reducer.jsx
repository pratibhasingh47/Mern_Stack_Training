import React, { useReducer } from 'react'

const Reducer = () =>{
    function countReducer(state,action){
        switch (action.type) {
            case "increment":
                return {...state,count : state.count + 1}

            case "decrement":
                return {...state,count : state.count - 1}

            case "reset":
                return {...state,count : 0}

            case "loading":
                return {...state,loading : !state.loading}

            default:
                return new Error("Unknown Type")
        }
    }

    const intialState = {count:0 , loading:true}

    const [ state ,  dispatch] = useReducer(countReducer,intialState);

    return(
        <div>
            <p>{state.count}</p>
            <button onClick={()=>{
                {dispatch({type : "increment"})}
            }}>INC</button>
            <button onClick={()=>{
                {dispatch({type : "decrement"})}
            }}>DEC</button>
        </div>
    )
}

export default Reducer