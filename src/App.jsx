import './App.css'
import { Route, Routes } from 'react-router-dom'
import Catalog from './Pages/Catalog'
import CreateMascota from './Pages/Mascotas/create'
import EditMascota from './Pages/Mascotas/edit'
import MascotaFormEdit from './Components/MascotaFormEdit'

function App() {

  return (
    <>

     <Routes>
      <Route path='/' element={<Catalog/>} />
      <Route path='/mascotas/create' element={<CreateMascota/>}/>
      <Route path='/mascotas/editar' element={<EditMascota/>}>
          <Route path='/mascotas/editar/:mascotaId' element={<MascotaFormEdit/>}></Route>
      </Route>
     </Routes>
    </>
  )
}

export default App
