import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import { Container } from 'reactstrap'

function App () {
  return (
    <div className='App'>
      <Container>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/nose' element={<h1>Nose</h1>} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
