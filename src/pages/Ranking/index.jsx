import { Profile } from "../../components/Profile";
import styles from "./styles.module.css";

export function Ranking() {
  return (
    <div className={styles.ranking}>
      <h2>Ranking</h2>

      <main className={styles.profiles}>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </main>
    </div>
  );
}
