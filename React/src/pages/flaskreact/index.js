import React, {useEffect, useState} from 'react'
import ArticleList from './ArticleList'



function Flaskreact (props) { 

    const [articles, setArticles] = useState([])
    const editArticle = props.editArticle
      
  
    useEffect(() => {
      fetch("http://127.0.0.1:5000/get", {
        'methods': 'GET',
        headers: {
          'Content-Type': 'applications/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error))
  
  
    }, [])
  
       
         
    return (

        <div>
            <h1>Flask and ReactJS Course</h1>

           <ArticleList articles = {articles} editArticle = {editArticle}/>

        </div>



       
  )
}

export default Flaskreact