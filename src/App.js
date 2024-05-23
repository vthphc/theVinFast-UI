import React from 'react'
import HomePage from './ui/HomePage'
import { Route, Routes } from 'react-router-dom'
import Introduction from './ui/Introduction'
import StartPage from './ui/StartPage'

export default function App() {
  return (
    <div class='flex flex-1 flex-col'>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </div>
  )
}