import './App.css';
import {HomePage, AboutPage, ErrorPage, CartPage, ProductsPage, SingleProductPage, CheckoutPage, AuthWrapper, PrivateRoute} from './pages';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Footer, Navbar, Sidebar } from './components';

function App() {
  return (
    <AuthWrapper >
    <Router>
      
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
        <Route path='*' element={<ErrorPage />} />
        
      </Routes>
      <Footer />
    </Router>
    </AuthWrapper>
  );
}

export default App;
