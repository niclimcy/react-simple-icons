import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Gotomeeting = forwardRef(function Gotomeeting(
  { color = 'currentColor', size = 24, title = 'GoToMeeting', ...others },
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
      <path d="M21.3 13.72a3.158 3.158 0 0 0-3.462.124.632.632 0 0 1-.682.035l-3.137-1.81a.08.08 0 0 1 0-.137l3.12-1.8a.632.632 0 0 1 .685.036 3.158 3.158 0 0 0 3.47.139A3.194 3.194 0 0 0 22.442 6.1a3.158 3.158 0 0 0-5.924 1.773.633.633 0 0 1-.311.606l-3.136 1.811a.08.08 0 0 1-.118-.068V6.6a.632.632 0 0 1 .372-.573 3.158 3.158 0 1 0-2.64 0 .632.632 0 0 1 .373.573v3.622a.08.08 0 0 1-.119.068L7.804 8.48a.632.632 0 0 1-.311-.605 3.157 3.157 0 1 0-1.307 2.294.633.633 0 0 1 .687-.038l3.12 1.8a.08.08 0 0 1 0 .137L6.854 13.88a.632.632 0 0 1-.683-.035 3.158 3.158 0 0 0-3.461-.124 3.194 3.194 0 0 0-1.143 4.202 3.159 3.159 0 0 0 5.924-1.792.633.633 0 0 1 .31-.61l3.137-1.81a.08.08 0 0 1 .119.068V17.4a.632.632 0 0 1-.372.573 3.158 3.158 0 1 0 2.64 0 .633.633 0 0 1-.373-.573v-3.621a.08.08 0 0 1 .118-.069l3.137 1.812a.631.631 0 0 1 .31.609 3.159 3.159 0 0 0 5.924 1.792A3.194 3.194 0 0 0 21.3 13.72Z" />
    </svg>
  );
});

Gotomeeting.propTypes = {
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

export default Gotomeeting;