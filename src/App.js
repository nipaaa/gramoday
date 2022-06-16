
import './App.css';
import Business from './components/Business';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Review from './components/Review';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} > 
        <Route index element={<Business />} />
        <Route path="review" element={<Review />} />
        </Route>
       
        <Route path="business/:id" element={<ProductDetails />} />
      </Routes>
    <Footer></Footer>
    
    </div>
  );
}

export default App;
