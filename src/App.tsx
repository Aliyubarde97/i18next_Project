import { BrowserRouter, Route,  Routes, Navigate,} from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import { Suspense } from 'react'
function App() {

  
  
  return (
    <>
    <Suspense fallback={null}>
    <BrowserRouter>
  
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>} />
          <Route path='/profile'   element={<Layout><Profile/></Layout>}/>
          <Route path='*' element={<Navigate to="/" />}/>
        </Routes>
    
    </BrowserRouter>
    </Suspense>
   
      
    </>
  )
}

export default App
