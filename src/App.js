import React from 'react'
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
// switch 없어지고 Link 생긴건가? 

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Mypage from './routes/MyPage'
import Login from './routes/Login'
import Search from './routes/Search'
import NotFound from './routes/NotFound'

import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path='/login' component={Login}/>
            <Route path='/me' component={Mypage}/>
            <Route path='/search' component={Search}/>
            <Route component={NotFound}/>
          </Switch>
      </div>
    </BrowserRouter>
  )
}


export default App;
