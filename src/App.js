import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { roues } from './routes/Routes'
import Layout from './components/Layout'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>

            {
                roues.map((cv,index,arr) => {
                    return <Route key={index} path={cv.path} element={cv.element} />
                })


            }
            </Route>
            
        </Routes>
    
    </BrowserRouter>
  )
}
