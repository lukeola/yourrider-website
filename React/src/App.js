import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import About from './pages/about'
import Contact from './pages/contact'
import CookiePrivacy from './pages/cookie-privacy';
import FAQs from './pages/faqs'
import Flaskreact from './pages/flaskreact';
import Form from './pages/flaskreact/Form';
import PrivacyPolicy from './pages/privacy-policy';
import Quote from './pages/quote'
import TermsAndConditions from './pages/terms-and-condition';
import Tracking from './pages/tracking';



function App(props) {

    const articles = props.articles;
    const editArticle = props.editArticle;
  
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
        <Route path='/cookie-privacy' element={<CookiePrivacy />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      </Routes>
    </Router>
  )


}

export default App