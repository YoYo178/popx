import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RootLayout } from './layouts/RootLayout/RootLayout'

import { Landing } from './pages/Landing/Landing'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { Profile } from './pages/Profile/Profile'

function App() {
  return (
    <BrowserRouter basename="/popx">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Landing />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
