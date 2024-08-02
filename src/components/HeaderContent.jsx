import { PropTypes } from "prop-types";
import styles from "./headerStyle.module.css";

export function HeaderContent(props) {
  return <div className={styles.headerStyle}>{props.children}</div>;
}

HeaderContent.propTypes = {
  children: PropTypes.node,
};
