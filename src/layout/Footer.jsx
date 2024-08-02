import { useRef } from "react";
import { PropTypes } from "prop-types";
import { FooterContent } from "../components/index.js";
import styles from "./appLayout.module.css";

export default function Footer(props) {
  const renderingRef = useRef(0);
  renderingRef.current += 1;

  return (
    <footer className={styles.footerLayout}>
      <FooterContent>
        {props.children}
        Footer renderings: {renderingRef.current}
      </FooterContent>
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
};
