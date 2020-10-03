import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sketchup = forwardRef(function Sketchup(
  { color = 'currentColor', size = 24, title = 'SketchUp', ...others },
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
      <path d="M15.537 0L.951 1.9v.11l2.107 12.595L6.053 24l15.387-4.381 1.608-13.725zm-.39 1.458l6.062 4.764-5.387.969-3.289-3.422-9.155 1.333-.835-1.999zm-2.49 6l3.121 3.892-5.058 1.077-1.209-2.08-4.658.907-.845-2.267zm-2.8 7.014l1.148 2.257-4.675 1.165-.827-2.427z" />
    </svg>
  );
});

Sketchup.propTypes = {
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

export default Sketchup;