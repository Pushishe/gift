import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/containers/Home/Home'
import Puzzle from '../src/containers/Puzzle/Puzzle'
import Quiz from '../src/containers/Quiz/Quiz'
import Encryption from './containers/Encryption/Encryption'
import Learning from './containers/Learning/Learning'


export default class App extends Component {
  render() {
    return (
    <Layout>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/quiz' element={<Quiz />}/>
          <Route path='/puzzle' element={<Puzzle />}/>
          <Route path='/learning' element={<Learning />}/>
          <Route path='/encryption' element={<Encryption />}/>
      </Routes>
    </Layout>
    )
  }
}

