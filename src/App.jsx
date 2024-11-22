
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

function App() {
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/best_seller" element={<Best_Seller />} />
        <Route path="/new_arrival" element={<New_Arrival />} />
        <Route path="/special_offer" element={<Special_Offer />} />
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
