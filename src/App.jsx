import { useState } from 'react'
import Header from './components/partials/Header'
import './App.css'
import {
  RouterProvider
} from 'react-router-dom';
import { routes } from './routes/routes';

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
