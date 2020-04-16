import React from 'react';
import PropTypes from 'prop-types';

const Archicad = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.553.005a25.99 25.99 0 0 0-1.171 1.368l-.013.013a45.296 45.296 0 0 0-2.827 3.989c-.201.31-.376.59-.52.83A64.25 64.25 0 0 0 5.21 9.373c-.253.467-.48.9-.634 1.219-1.274 2.535-3.45 7.252-4.574 9.709v2.845c1.56-4.153 4.289-10.754 4.723-11.598.607-1.175 3.622-7.956 6.676-9.293l.083-.034c2.193-.848 3.381 3.15 3.381 3.15s.87 2.027 1.897 6.702c.548 2.494 1.227 5.494 2.172 11.927H24V.005H11.553zM.15 24c1.462-3.979 4.503-11.359 4.962-12.251.068-.13.162-.324.28-.568.489-1.002 1.398-2.867 2.521-4.63 1.344-2.108 2.575-3.418 3.66-3.894l.073-.031c.15-.057.298-.087.44-.087.72 0 1.312.763 1.68 1.402.27.468.463.942.573 1.242-.415.244-.99.625-1.608 1.17-1.025.904-1.684 1.784-2.55 3.424-1.04 1.969-1.577 3.578-2.137 5.31a53.474 53.474 0 0 0-1.655 6.597c-.178.95-.3 1.748-.382 2.316H.15z" />
    </svg>
  );
};

Archicad.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Archicad.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Archicad;