import './App.css';
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";


import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Head from './component/Head/Head';
import Category from './component/Category/Category';
import Cart from './component/Cart/Cart';
import Wishlist from './component/Wishlist/Wishlist';

function App() {
  return (
<>
      <Router>
        <Head/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path='category' element={<Cart/>} />
          <Route path ='/cart' element={<Category/>} />
          <Route path ='/wishlist' element={<Wishlist/>} />



        </Routes>

      </Router>
</>
  );
}

export default App;
