import { useRef } from "react";
import { PropTypes } from "prop-types";
import { HeaderContent } from "../components/index.js";
import styles from "./appLayout.module.css";

export default function Header(props) {
  const renderingRef = useRef(0);
  renderingRef.current += 1;

  return (
    <header className={styles.headerLayout}>
      <HeaderContent>
        {props.children}
        <br />
        The Header renderings: {renderingRef.current}
      </HeaderContent>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};
