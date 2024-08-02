import { PropTypes } from "prop-types";
import styles from "./mainStyle.module.css";

export function MainContent(props) {
  return (
    <div className={styles.mainStyle}>
      <h1>Main area</h1>
      <p>This is the main area</p>
      <h2>Main area</h2>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      <h3>Main area</h3>
      <p>This is the main area</p>
      {props.children}
    </div>
  );
}

MainContent.propTypes = {
  children: PropTypes.node,
};
