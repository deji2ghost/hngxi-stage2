import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './Pages/Home'
import { CartPage } from './Pages/CartPage'
import { CheckOut } from './Pages/CheckOut'

function App() {

  return (
    <div className='bg-almostPink overflow-hidden'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
