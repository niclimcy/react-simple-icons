import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Aerospike = forwardRef(function Aerospike(
  { color = 'currentColor', size = 24, title = 'Aerospike', ...others },
  ref
) {
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
      <path d="M0 0v24h24V0zm19.295 5.386v1.64l-3.576 1.586v7.363l3.576 1.602v1.565L5.672 12.98l-1.607-.688 1.607-.743zm-4.948 3.825L7.45 12.283l6.897 3.092Z" />
    </svg>
  );
});

Aerospike.propTypes = {
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

export default Aerospike;
