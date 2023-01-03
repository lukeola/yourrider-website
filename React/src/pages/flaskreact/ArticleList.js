import React, {useState} from 'react'
import ArticleForm from './ArticleForm'
import { DeleteButton, UpdateButton } from './FlaskElements'

const ArticleList = (props) => {
  
    const [editedArticle , setEditedArticle] = useState(null)

    const editArticle = (article) => {
        setEditedArticle(article)
      }
    return (


    <div> {props.articles && props.articles.map(article => {

        return(
    <div key = {article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.body}</p>
                        <p>{article.date}</p>
                    <DeleteButton >Delete</DeleteButton>
                    <UpdateButton onClick={ () => editArticle (article)}>Update</UpdateButton>
    </div>
                )

               
            })}

            {editedArticle ? <ArticleForm article = {editedArticle}/>:null}
</div>
  )
}

export default ArticleList