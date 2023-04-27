import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blog/'

const CompShowBlogs = () => {
    const [blogs, setBlog] = useSatte([])
    useEffect( () =>{
        getBlogs()

    },[])
    // procedimiento para mostrar todos los blogs
    const getBlogs = async () => {

    }
    // procedimiento para eliminar un blog
    const deleteBlog = async (id) => {
    
    }
    return(
        <div>
            
        </div>
    )
}

export default CompShowBlogs