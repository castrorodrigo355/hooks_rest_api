import React, { useState, useEffect} from 'react';
import axios from "axios";

function IndexCrud1() {

    const[loading, setLoading] = useState(true);
    const[error, setError] = useState("");
    const[post, setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                    setLoading(false)
                    setPost(res.data)
                    setError("")
                    console.log("Good")
                })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError("Something went wrong!")
            })
    },[])

    return (
        <div>
            {loading ? "Loadging" : post.title}
            {error ? "Error" : null}
        </div>
    )
}

export default IndexCrud1