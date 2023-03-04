import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/main";
import Poems from "./pages/poems";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>
  },
  {
    path: "/poems",
    element: <Poems/>
  }
])
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
