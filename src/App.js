import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Cart } from './pages';

function App() {
  return (
    <div>
      <h1>Navbar</h1>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
