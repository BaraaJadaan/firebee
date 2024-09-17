import './App.css'
import Navbar from './components/Navbar'
import Product from './layout/Product'

function App() {

  return (
    <>
      {localStorage.setItem('chakra-ui-color-mode', 'light')}
      <Navbar/>
      <Product/>
    </>
  )
}

export default App
