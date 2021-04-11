import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mobx = forwardRef(function Mobx({ color = 'currentColor', size = 24, title = 'MobX', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M1.402 0C.625 0 0 .625 0 1.402v21.196C0 23.375.625 24 1.402 24h21.196c.777 0 1.402-.625 1.402-1.402V1.402C24 .625 23.375 0 22.598 0zm2.882 4.367h3.038v13.068H4.284v-.986h1.863V5.352H4.284zm12.394 0h3.038v.985h-1.863V16.45h1.863v.986h-3.038zm-7.856 3.55h1.35c.108.441.234.914.378 1.418.153.495.31.99.472 1.485.171.486.342.958.513 1.417.171.46.333.869.486 1.229.153-.36.315-.77.486-1.229.171-.459.338-.931.5-1.417.17-.495.328-.99.472-1.485.153-.504.284-.977.392-1.418h1.296a34.42 34.42 0 0 1-1.242 3.78 56.393 56.393 0 0 1-1.364 3.24h-1.134a63.87 63.87 0 0 1-1.377-3.24 36.424 36.424 0 0 1-1.228-3.78Z" />
    </svg>
  );
});

Mobx.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Mobx;
