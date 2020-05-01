import React from 'react';
import PropTypes from 'prop-types';

const Checkmarx = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M6.544.12A6.553 6.553 0 0 0 0 6.664v10.674a6.551 6.551 0 0 0 6.544 6.542h10.912A6.551 6.551 0 0 0 24 17.338v-.831a2.193 2.193 0 0 0-4.388 0v.83c0 1.19-.967 2.157-2.156 2.157H6.544a2.16 2.16 0 0 1-2.158-2.156V6.748c0-1.19.969-2.16 2.158-2.16 3.843.004 7.814-.009 11.612.001.556.138.892.445 1.058.848.193.47.343 1.118-.404 1.748l-6.26 4.596-1.892-2.441a2.191 2.191 0 0 0-3.075-.391 2.191 2.191 0 0 0-.391 3.076l3.198 4.133a2.197 2.197 0 0 0 3.035.424l7.252-5.301a56.68 56.68 0 0 0 1.22-.977c2.106-1.926 2.517-4.393 1.627-6.553C22.603 1.51 20.268.12 17.435.12Z" />
    </svg>
  );
};

Checkmarx.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Checkmarx.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Checkmarx;
