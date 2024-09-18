import './App.css'
import Navbar from './components/Navbar'
import Benefits from './layout/Benefits'
import Content from './layout/Content'
import FAQ from './layout/FAQ'
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
      <Benefits/>
      <Content/>
      <FAQ/>
    </>
  )
}

export default App
