import React from 'react'
import { DeleteButton } from './FlaskElements';

const Bloglist = (props) => {

    const blogs = props.blogs;
    const title = props.title;
    const deleteFunction = props.deleteFunction;

    console.log(props,blogs);
  return (
    <div style={{margin:'30px'}}>

    <h1 style={{fontSize:'30px'}}> {title} </h1>

        {blogs.map((blog) => (
      <div key={blog.id}>
        <h2 style={{padding:'10px'}}>{ blog.title }</h2>
        <p style={{padding:'10px'}}>{ blog.body }</p>
        <p style={{padding:'10px'}}> Written by { blog.author }</p>
        <DeleteButton onClick={() => deleteFunction(blog.id)} style={{padding:'10px'}}>Delete Blog </DeleteButton>
      </div>
    ))}
    
    </div>
  )
}

export default Bloglist