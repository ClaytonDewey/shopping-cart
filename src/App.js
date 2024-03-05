import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Cart } from './pages';
import { Header } from './components';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
