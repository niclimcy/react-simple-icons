import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Falcon = forwardRef(function Falcon({ color = 'currentColor', size = 24, title = 'Falcon', ...others }, ref) {
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
      <path d="M15.929 19.487c0 .035.264.2.592.364 1.578.835 2.55 1.742 2.914 2.75.164.435.171.592.028.92-.178.436-.207.429.95.393 1.043-.035 1.657-.15 1.657-.314 0-.078-.857-.885-1.171-1.093a1.431 1.431 0 0 1-.186-.15 7.636 7.636 0 0 0-.321-.257 11.96 11.96 0 0 1-.372-.278 6.126 6.126 0 0 0-.25-.193l-.45-.35a4.642 4.642 0 0 0-.535-.357c-.328-.178-.528-.307-.571-.357-.05-.057-1.036-.593-1.5-.814-.214-.1-.45-.214-.514-.25-.157-.086-.271-.093-.271-.014zm-5.75-1.536a4.78 4.78 0 0 0-.056.415c-.043.5-.379 1.164-.764 1.52-.465.436-.75.572-.993.48a3.353 3.353 0 0 0-.628-.115c-.357-.043-.486-.022-.657.078-.186.108-.222.179-.222.4 0 .315-.007.307.257.165a1.02 1.02 0 0 1 .3-.108c.15 0 .093.143-.093.229-.207.093-.264.271-.278.828-.007.422.121.586.236.286.035-.093.17-.221.3-.293A1.42 1.42 0 0 0 8 21.43c.186-.314.286-.364.286-.15 0 .457.236.479.436.036.121-.243.186-.307.271-.271.236.1.515.114.615.028.1-.086.092-.114-.043-.257-.086-.093-.15-.179-.129-.193.157-.114.5-.193.85-.193.628 0 .714-.107.714-.914 0-.82-.214-1.406-.564-1.556-.179-.072-.236-.079-.257-.008zM22.535 1.062a1.22 1.22 0 0 0-.193.315c-.414.885-1.785 1.72-3.949 2.392-.193.064-.535.164-.75.236-.214.064-.635.2-.928.285-3.635 1.107-4.27 1.678-5.57 4.963-.586 1.472-.893 1.964-1.5 2.364-.507.343-.92.457-2.07.6-1.829.221-2.536.436-3.107.943-.35.3-.464.614-.464 1.242 0 .286-.029.536-.057.557-.036.022-.1.214-.15.436-.072.3-.072.45-.007.643.1.292.378.535.628.535.178 0 .186-.05.05-.371-.029-.079.014-.179.136-.307.157-.157.235-.179.72-.179.558 0 .744-.057 1.008-.3.15-.135.157-.135.357.086.421.464 1.52 1.121 2.892 1.735.65.293 1.057.643 1.364 1.186.207.357.236.457.236.97 0 .836-.3 1.408-.886 1.68-.1.05-.243.113-.307.15-.071.035-.336.063-.593.063H8.93l-.15.336a8.087 8.087 0 0 1-.25.528c-.078.158-.078.208 0 .322.093.121.122.107.464-.243.358-.364.579-.471.579-.271 0 .057-.129.2-.279.321-.35.278-.4.478-.235.95.135.385.314.5.357.235.014-.078.121-.235.235-.35.115-.107.208-.242.208-.292 0-.05.05-.129.107-.179.157-.128.221.1.121.457-.064.243-.057.314.036.414.071.079.093.186.064.307-.029.129-.014.179.05.179.1 0 .336-.221.336-.314 0-.029.064-.15.15-.264.15-.215.157-.258.021-1.014-.021-.143-.014-.265.014-.265.15 0 .664.329.693.443.05.186.264.079.264-.136a.802.802 0 0 0-.428-.678c-.236-.1-.279-.257-.086-.314.45-.143.871-.4 1.25-.779.457-.442.535-.535.828-.964.407-.592.786-.857 1.221-.857.6 0 2.485.843 3.942 1.764.679.429 2.007 1.357 2.228 1.557.043.043.286.221.543.407.257.179.7.521.986.764.285.236.542.436.57.436.236 0 .315-.614.108-.8a5.417 5.417 0 0 0-.557-.343c-.521-.293-1.528-.971-1.964-1.335-.985-.807-2.242-2.385-3.078-3.864a9.517 9.517 0 0 1-.278-.485c-.6-1.05-1.743-2.385-2.05-2.385-.121 0-.121-.008.072-.929.057-.293.142-.792.185-1.107.129-.87.314-1.863.45-2.356.386-1.45 1.207-2.457 2.7-3.3 2.092-1.192 2.927-1.928 3.527-3.12.322-.636.386-.793.579-1.507.1-.364.221-1.25.171-1.25a.391.391 0 0 0-.1.057zM3.496.484C1.839 2.198 1.003 3.926 1.003 5.647c0 .393.029.729.072.75.043.021.071.114.071.2 0 .2.172.693.4 1.157.3.621.736 1.057 1.921 1.914.929.67 1.443 1.428 1.614 2.385l.093.514.257-.107c.65-.279 1.15-.379 2.642-.536.957-.1 1.328-.243 1.771-.678.629-.629.329-1.036-1.635-2.2-2.114-1.257-2.87-1.842-3.692-2.863-.657-.822-.993-1.5-1.157-2.343-.157-.785.057-2.028.536-3.142.135-.328.25-.614.25-.642 0-.15-.236.007-.65.428Z" />
    </svg>
  );
});

Falcon.propTypes = {
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

export default Falcon;
