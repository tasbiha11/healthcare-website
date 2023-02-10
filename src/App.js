import './App.css';
import Home from './Pages/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import { Fragment } from 'react';
import Layout from './components/Layout/Layout';
import Contact from './Pages/Contact';


const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index path='/home' element={<Home />} />
    <Route index path='/contact' element={<Contact />} />
  </Route>
))

function App() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment >
  );
}

export default App;
