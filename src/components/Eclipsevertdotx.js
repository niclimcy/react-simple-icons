import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Eclipsevertdotx = forwardRef(function Eclipsevertdotx(
  { color = 'currentColor', size = 24, title = 'eclipsevertdotx', ...others },
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
      <path d="M3.356.01C1.566.01.027 1.269 0 2.938v1.436h2.515l3.861 8.896 4.028-8.791h5.078l2.182 3.986 2.56-3.986H24V2.946C24 1.281 22.44.011 20.645.011zM24 5.668l-8.874 13.56H12.44c-.02-.629-.188-1.237-.503-1.74l3.609-5.708-2.744-4.36-3.829 8.42-.036-.002a3.443 3.443 0 0 0-3.434 3.433c0 .021.003.042.004.063h-.263L0 7.5v13.553c0 1.665 1.56 2.935 3.356 2.935h17.289c1.812 0 3.355-1.276 3.355-2.935v-1.826h-3.587l-1.594-2.874 2.224-3.378L24 17.638zm-15.066 11.5a2.102 2.102 0 0 1 2.109 2.103 2.106 2.106 0 1 1-4.212 0c0-1.16.937-2.1 2.103-2.103Z" />
    </svg>
  );
});

Eclipsevertdotx.propTypes = {
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

export default Eclipsevertdotx;