import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import About from './pages/about'
import Contact from './pages/contact'
import FAQs from './pages/faqs'
import Flaskreact from './pages/flaskreact';
import Form from './pages/flaskreact/Form';
import Quote from './pages/quote'
import Tracking from './pages/tracking';



function App() {

  const [articles, setArticles] = useState([])
  const [editedArticle , setEditedArticle] = useState([])
    

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

  const editArticle = (article) => {
    setEditedArticle(article)
  }
  return (
 
    <Router>
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faqs' element={<FAQs/>} />
        <Route path='/quote' element={<Quote/>} />
        <Route path='/tracking' element={<Tracking/>} />
        <Route path='/flaskreact' element={<Flaskreact articles = {articles} editArticle = {editArticle}/>} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </Router>
  )


}

export default App