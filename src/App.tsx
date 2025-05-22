import { createHashRouter, Navigate, RouterProvider } from "react-router";
import ProtectedRoute from "./pages/ProtectedRoute";
import AppLayout from "./ui/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Watching from "./pages/Watching";
import Continued from "./pages/Continued";
import Finished from "./pages/Finished";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import AddShow from "./pages/AddShow";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "add",
        element: <AddShow />,
      },
      {
        path: "watching",
        element: <Watching />,
      },
      {
        path: "continued",
        element: <Continued />,
      },

      {
        path: "finished",
        element: <Finished />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
