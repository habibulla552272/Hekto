
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About';
import RootLayout from './Component/RootLayout';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';
import Best_Seller from './Component/Best_Seller';
import New_Arrival from './Component/New_Arrival';
import Special_Offer from './Component/Special_Offer';
import Contact from './Pages/Contact';
import ProductDetails from './Pages/ProductDetails';
import ShoppingCurt from './Component/Card/ShoppingCurt';
import NotFound_Page from './Component/NotFound_Page';


function App() {
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/curt" element={<ShoppingCurt />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/best_seller" element={<Best_Seller />} />
        <Route path="/new_arrival" element={<New_Arrival />} />
        <Route path="/special_offer" element={<Special_Offer />} />


        <Route path='*' element={<NotFound_Page />} />

      </Route>
    )
  );
 

  return (
    <>
      <RouterProvider router={myRouter}/>
      
    </>
  )
}

export default App
