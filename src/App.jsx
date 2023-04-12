import React from 'react';
import Home from './Components/home/Home';
import Layout from './Components/layout';
import {Routes,Route} from "react-router-dom";
import BlogPages from './Components/blo/BlogPages';
import AuthorPage from './Components/author/AuthorPage';

function App() {
  return (
    <>
    <Layout>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blog/:slug' element={<BlogPages/>}/>
    <Route path='/authors/:slug' element={<AuthorPage/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App