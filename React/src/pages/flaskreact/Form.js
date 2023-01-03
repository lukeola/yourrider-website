import React, {useEffect, useState} from 'react'
import Bloglist from './Bloglist'


function Form() {

    const [name, setName] = useState('state 1')
    const [age, setAge] = useState(29)
    
    const buttonclick = () =>
    {
      setName('state 2')
      setAge(33)
    }

    const [blogs, setBlogs] = useState(null)
    
    const deleteFunction = (id) => {
      const newBlog = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlog);
    }

    useEffect(() => {
      fetch('http://localhost:5000/get')
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data)
          setBlogs(data)
        })
    } ,[]) 
  return (
    <div>
       <h1> at {name} the number is {age}</h1>
        <button style={{padding:'10px'}} onClick={ () => buttonclick ()}>Click Here</button>
    
    
    {blogs && <Bloglist blogs={blogs} title={'First Blog'} deleteFunction= {deleteFunction}/>}
  
    </div>

    
  )
}

export default Form