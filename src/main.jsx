import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Registration from './routes/Registration.jsx';
import { CssBaseline } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>
  },
  {
    path: "/sign_up",
    element: <Registration/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <RouterProvider router={router} />
    </CssBaseline>
  </React.StrictMode>,
)
