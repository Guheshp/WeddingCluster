import React from 'react';
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Venue from './components/Venue';
import Blog from './components/Blog';
import About from './components/About';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/portfolio",
        element: <Venue />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/about-us",
        element: <About />
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
