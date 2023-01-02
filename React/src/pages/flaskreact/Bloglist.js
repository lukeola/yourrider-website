import React from 'react'

const Bloglist = (props) => {

    const blogs = props.blogs;

    console.log(props,blogs);
  return (
    <div>
        {blogs.map((blog) => (
      <div key={blog.id}>
        <h2>{ blog.title }</h2>
        <p> Written by { blog.author }</p>
      </div>
    ))}
    
    </div>
  )
}

export default Bloglist