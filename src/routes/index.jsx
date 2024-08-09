import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/about',
        element: <About/>
    }
  ])
  const MyRoutes = ()=><RouterProvider router={router} />

  export default MyRoutes;