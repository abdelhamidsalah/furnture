import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import ProDetails from './components/ProDetails';


function App() {
  return (
<div>
<BrowserRouter>
<Header/>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/shop' element={<Shop/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/checkout' element={<Checkout/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/signup' element={<Signup/>}></Route>
<Route path='/shop/:id' element={<ProDetails/>}></Route>
</Routes>
<Footer/>
</BrowserRouter>

</div>
  );
}

export default App;
