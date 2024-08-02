import { useRef } from "react";
import { Header, Navigation, Main, Aside, Footer } from "./layout/index.js";
import styles from "./layout/appLayout.module.css";

export default function App() {
  const renderingRef = useRef(0);
  renderingRef.current += 1;

  return (
    <div className={styles.appContainerLayout}>
      <Header>App renderings: {renderingRef.current}</Header>
      <Navigation />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}
