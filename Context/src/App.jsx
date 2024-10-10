
import './App.css'
import Counter from './components/Counter'
import { CounterPovider } from './stores/CounterContext'
// for cart components

import Items from './components/items'
import { Cart } from './components/Cart'
import { CartProvider } from './stores/Cart'
function App() {

  return (
    // counter
    // <>
    //   <CounterPovider>
    //     <Counter />
    //   </CounterPovider>
    // </>
    // add to card 
    <>
      <CartProvider>
      <Items name={"Hp laptop"} price={45000}/>
      <Items name={"Noise watch"} price={1000}/>
      <Items name={"MI Timmer"} price={800}/>
      <Items name={"Moto 50 fusion phone"} price={20000}/>
      <Items name={"Friz laptop"} price={15000}/>
      <hr />
      <Cart/>
      </CartProvider>
    </>
  )
}

export default App
