import { useRef } from "react";
import { PropTypes } from "prop-types";
import { MainContent } from "../components/index.js";
import styles from "./appLayout.module.css";

export default function Main(props) {
  const renderingRef = useRef(0);
  renderingRef.current += 1;

  return (
    <main className={styles.mainLayout}>
      Main renderings: {renderingRef.current}
      <MainContent />
      {props.children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node,
};
