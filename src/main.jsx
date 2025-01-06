import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Home from './Home'
import { RouterProvider } from 'react-router-dom'
import Contact from './Contact'
const router = createBrowserRouter([
{
  path:'/',
  element: <Home/>
},
{
  path:'/contact',
  element: <Contact/>
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
