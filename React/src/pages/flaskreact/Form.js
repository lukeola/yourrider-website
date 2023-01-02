import React, {useState} from 'react'
import Bloglist from './Bloglist'


function Form() {

    const [name, setName] = useState('state 1')
    const [age, setAge] = useState(29)
    
    const buttonclick = () =>
    {
      setName('state 2')
      setAge(33)
    }

    const [blogs, setBlogs] = useState([
      {title:'Title 1', body: ' this is my first body', author:'luke', id: 1},
      {title:'Title 2', body: ' this is my second body', author:'olawale', id: 2},
      {title:'Title 3', body: ' this is my third body', author:'rotimi', id: 3}
    ])
 
  return (
    <div>
       <h1> at {name} the number is {age}</h1>
        <button style={{padding:'10px'}} onClick={buttonclick}>Click Here</button>
    
    
    <Bloglist blogs={blogs}/>
    </div>

    
  )
}

export default Form