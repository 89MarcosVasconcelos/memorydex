import classNames from "classnames";
import styles from "./styles.module.css";

export function GameOverModal({ show, steps, onPlayAgain }) {
  return (
    <div className={classNames(styles.modal, { [styles.visible]: show })}>
      <div className={styles.content}>
        <h2>       Parabéns <strong> Treinador(a)</strong>!     </h2>
        <span>          Você capturou todos os pokemons em{" "}   <strong>{Math.floor(steps / 2)}</strong>        </span>
        <button onClick={onPlayAgain}>Jogar novamente</button>
      </div>
    </div>
  );
}
