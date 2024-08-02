import { useRef } from "react";
import { PropTypes } from "prop-types";
import { AsideContent } from "../components/index.js";
import styles from "./appLayout.module.css";

export default function Aside(props) {
  const renderingRef = useRef(0);
  renderingRef.current += 1;

  return (
    <aside className={styles.asideLayout}>
      Aside renderings: {renderingRef.current}
      <AsideContent />
      {props.children}
    </aside>
  );
}

Aside.propTypes = {
  children: PropTypes.node,
};
