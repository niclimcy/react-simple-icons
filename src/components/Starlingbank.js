import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Starlingbank = forwardRef(function Starlingbank(
  { color = 'currentColor', size = 24, title = 'Starling Bank', ...others },
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
      <path d="M12 0C5.3726 0 0 5.3727 0 12c0 6.627 5.3726 12 12 12 6.6279 0 12-5.373 12-12 0-6.6273-5.3721-12-12-12zm3.6094 4.7559v1.4668c-3.1771 0-5.754 2.5766-5.754 5.7539H8.3888c0-3.9882 3.2327-7.2207 7.2207-7.2207zm-1.4649 7.2207h1.4668c0 3.9889-3.233 7.2226-7.2226 7.2226v-1.4687c3.1787 0 5.7558-2.5757 5.7558-5.754Z" />
    </svg>
  );
});

Starlingbank.propTypes = {
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

export default Starlingbank;
