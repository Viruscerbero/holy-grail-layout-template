import { useRef } from "react";
import { PropTypes } from "prop-types";
import { NavigationContent } from "../components/index.js";
import styles from "./appLayout.module.css";

export default function Navigation(props) {
  const renderingRef = useRef(0);
  renderingRef.current += 1;

  return (
    <nav className={styles.navLayout}>
      Nav renderings: {renderingRef.current}
      <ul className={styles.ulStyle}>
        <NavigationContent />
        {props.children}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  children: PropTypes.node,
};
