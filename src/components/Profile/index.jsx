import { useAuth } from "../../hooks/useAuth";
import styles from "./styles.module.css";

export function Profile() {
  const { user } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Sheba" />
        <strong>{user.name}</strong>
      </div>

      <span className={styles.steps}>20</span>
    </div>
  );
}
