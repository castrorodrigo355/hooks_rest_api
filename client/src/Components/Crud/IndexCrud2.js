import React, { useState, useEffect, useReducer } from 'react';
import axios from "axios";

const initialState = {loading:true, error:"", posts:[]}

const reducer = (state, action) => {
    switch(action.type){
        case "FETCH_SUCCESS": return { loading: false, posts: action.payload, error: "" };
        case "FETCH_ERROR": return { loading: false, posts: [], error: "Something went wrong" };
        default: return state;
    }
}

function IndexCrud2() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        // axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        axios.get(`http://localhost:3000/api/students`)
            .then(res => {dispatch({type:"FETCH_SUCCESS", payload: res.data.slice(0,35)})})
            .catch(error => {dispatch({type:"FETCH_ERROR"})
            })   
    },[])

    return (
        <div>
            {
                state.loading ? "Loadging" 
                    : 
                state.posts.map(post => 
                    <li key={post._id}>
                        {post.name} - {post.age} - <button type="submit" className="btn btn-danger" 
                                                // onClick={() => deleteStudent(student._id)}
                                                >Delete
                                        </button>
                    </li>)
            }
            {state.error ? "Error" : null}
        </div>
    )
}

export default IndexCrud2