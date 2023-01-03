import React, { useState } from 'react'
import { Messagebox } from './FlaskElements'

const ArticleForm = (props) => {

  const [title, setTitle] = useState(props.article.title)
  const [body, setBody] = useState(props.article.body)
  return (
    <div>
    {props.article ? (

      <div style={{display:'flex', flexDirection:'column', width:'30%', gap:'20px', marginLeft:'20px'}}>
        <label style={{marginTop:'10px', fontSize:'20px'}}>Title</label>
        <input placeholder='Enter Title Here' value={title} onChange={(e) => setTitle(e.target.value)}/> 

        <label style={{marginTop:'10px', fontSize:'20px'}}>Description</label>
        <Messagebox placeholder='Enter Message Here' value={body} onChange={(e) => setBody(e.target.value)}/>
      </div>

      

    ):null}
    

   
    
    </div>
  )
}

export default ArticleForm