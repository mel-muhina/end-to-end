import { useState } from 'react'
import { HomePage, SearchPage, ShowPage, ShowsPage } from './pages';
import './App.css'
import {Routes, Route} from "react-router-dom";
import Navigation from './layout/Navigation';
import { ShowProvider } from './contexts'

function App() {
  

  return (
    <>
    <ShowProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/shows">
            <Route index element={<ShowsPage />} />
            <Route path=":id" element={<ShowPage />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </ShowProvider>
     
     
     
    </>
  )
}

export default App
