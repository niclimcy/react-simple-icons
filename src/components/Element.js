import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Element = forwardRef(function Element({ color = 'currentColor', size = 24, title = 'Element', ...others }, ref) {
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
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.314 4.715c3.289 0 5.956 2.66 5.956 5.943 0 .484-.394.877-.879.877s-.879-.393-.879-.877c0-2.313-1.88-4.189-4.198-4.189-.486 0-.879-.393-.879-.877s.392-.877.879-.877zm-5.092 9.504c-.486 0-.879-.394-.879-.877 0-3.283 2.666-5.945 5.956-5.945.485 0 .879.393.879.877s-.394.876-.879.876c-2.319 0-4.198 1.877-4.198 4.191 0 .484-.395.878-.879.878zm7.735 5.067c-3.29 0-5.957-2.662-5.957-5.944 0-.484.394-.878.879-.878s.879.394.879.878c0 2.313 1.88 4.189 4.199 4.189.485 0 .879.393.879.877 0 .486-.394.878-.879.878zm0-2.683c-.485 0-.88-.393-.88-.876 0-.484.395-.878.88-.878 2.318 0 4.199-1.876 4.199-4.19 0-.484.393-.877.879-.877.485 0 .879.393.879.877 0 3.282-2.667 5.944-5.957 5.944z" />
    </svg>
  );
});

Element.propTypes = {
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

export default Element;