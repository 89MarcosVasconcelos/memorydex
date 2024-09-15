import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
  useLocation,
  Navigate
} from "react-router-dom";
import { Game } from "../pages/Game";
import { Ranking } from "../pages/Ranking";
import { Layout } from "../components/Layout";
import { Error } from "../pages/Error";
import { useAuth } from "../hooks/useAuth";
import { Login } from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/ranking",
        element: (
          <RequiredAuth>
            <Ranking />
          </RequiredAuth>
        ),
      },
    ],
  },
]);

function RequiredAuth({ children }) {
  const location = useLocation();

  /*
  Verifique se existe um usuário logado. Caso não exista, redirecione ele para a tela de login.
  Dica 1: use o hook useAuth para verificar se o usuário está logado.
  Dica 2: utilize o componente Navigate do react-router-dom.
  Dica 3: você pode passar para o Navigate, uma propriedade state={{ from: location }} para
  armazenar o location do usuário antes dele ser redirecionado.
  */
  const auth = useAuth();
  if(!auth.user){
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children;
}

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
