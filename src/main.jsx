import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App';
import Member from "./components/Member";
import MemberList from "./components/MemberList";
import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <MemberList />,
      },
    ],
  },
  {
    path: "/edit/:id",
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Member />,
      }
    ]
  },
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Member />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

