
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About';
import RootLayout from './Component/RootLayout';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';

function App() {
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
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
