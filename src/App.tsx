import './App.css'
import Navbar from './components/Navbar'
import MoneyBackGuarantee from './layout/MoneyBackGuarantee'
import Product from './layout/Product'

function App() {

  return (
    <>
      {localStorage.setItem('chakra-ui-color-mode', 'light')}
      <Navbar/>
      <Product/>
      <MoneyBackGuarantee/>
    </>
  )
}

export default App
