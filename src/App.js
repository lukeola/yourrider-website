import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import About from './pages/about'
import Contact from './pages/contact-us'
import FAQs from './pages/faqs'
import Quote from './pages/quote'


const App = () => {
  return (
    <Router>
      <Home/>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/faqs' component={FAQs} />
        <Route path='/quote' component={Quote} />
      </Routes>
    </Router>
  )
}

export default App