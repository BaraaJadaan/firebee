import './App.css'
import Navbar from './layout/Navbar'
import Benefits from './layout/Benefits'
import Content from './layout/Content'
import FAQ from './layout/FAQ'
import Footer from './layout/Footer'
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
      <Footer/>
    </>
  )
}

export default App
