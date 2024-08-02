import { PropTypes } from "prop-types";

export function NavigationContent(props) {
  const links = [...Array(9).keys()];

  return (
    <>
      {links.map((link) => (
        <li key={link}>
          <a>Navigation link</a>
        </li>
      ))}
      {props.children}
    </>
  );
}

NavigationContent.propTypes = {
  children: PropTypes.node,
};
