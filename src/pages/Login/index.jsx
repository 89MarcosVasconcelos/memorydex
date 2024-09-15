import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import pokemonImg from "../../assets/pokemon.png";
import logo from "../../assets/logo.svg";

import styles from "./styles.module.css";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/game";

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = { name: formData.get("username") };

    /*
      Autentique o usuário e redirecione ele para a constante "from" declarada acima.
      Dica: utilize o hook useAuth para realizar a autenticação do usuário.
      Dica: Lembre-se de redirecionar o usuário para a constante "from" usando o navigate com a opção replace: true.
      Lembre-se que a função signin recebe dois parâmetros, o primeiro o usuário e o segundo uma função callback.
      Utilize a callback para redirecionar o usuário
     */

    auth.signin(username, () => {
      console.log("from: ", from);

      navigate(from, { replace: true });
    })
  }

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <main className={styles.login}>
          <img src={logo} alt="Memoridex" /> 


          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              name="username"
              required
              placeholder="username"/>
            <button type="submit">Jogar</button>
          </form>
        </main>

        <aside>
          <img src={pokemonImg} alt="pokemon background" />
        </aside>
      </div>
    </div>
  );
}
