import './App.css'
import { Route, Routes } from 'react-router-dom'
import Catalog from './Pages/Catalog'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Catalog/>} />
     </Routes>
    </>
  )
}

export default App
