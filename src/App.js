import Button from "./Button";
import Todo from "./Todo";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcom Back!!!</h1>
      <Button text={"Continue"} />
      <Todo />
    </div>
  );
}

export default App;
