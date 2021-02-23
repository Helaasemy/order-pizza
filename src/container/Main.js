
import Header from "../components/Header/Header"
import Content from "../components/Content/Content"
import Pizza from "../components/Pizza/Pizza"
import styles from "./Main.module.scss"

function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Content/>
      <Pizza/>
    </div>
  );
}

export default App;
