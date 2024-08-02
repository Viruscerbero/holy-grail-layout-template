import { PropTypes } from "prop-types";
import styles from "./footerStyle.module.css";

export function FooterContent(props) {
  return <div className={styles.footerStyle}>{props.children}</div>;
}

FooterContent.propTypes = {
  children: PropTypes.node,
};
