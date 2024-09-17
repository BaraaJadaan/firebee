import './App.css'
import Navbar from './components/Navbar'
import MoneyBackGuarantee from './layout/MoneyBackGuarantee'
import Product from './layout/Product'
import Signals from './layout/Signals'

function App() {

  return (
    <>
      {localStorage.setItem('chakra-ui-color-mode', 'light')}
      <Navbar/>
      <Product/>
      <MoneyBackGuarantee/>
      <Signals/>
    </>
  )
}

export default App
