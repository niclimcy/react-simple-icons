import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tunein = forwardRef(function Tunein({ color = 'currentColor', size = 24, title = 'TuneIn', ...others }, ref) {
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
      <path d="M7.66 11.395v.742c0 .105-.11.105-.11.105h-.847s-.11 0-.11.11v4.03c0 .11-.105.11-.105.11h-.855c-.106 0-.106-.11-.106-.11v-4.03s0-.11-.109-.11h-.844c-.105 0-.105-.105-.105-.105v-.742c0-.106.105-.106.105-.106H7.66v.106m15.458-7.52H12.301c-.68 0-.836.16-.836.816v2.414c0 .493 0 .493-.492.493H.813c-.676 0-.813.136-.813.824v5.41c0 1.754 0 3.508.023 5.266 0 .922.102 1.02 1.04 1.02H9.89c.664 0 1.32.01 1.984-.009.48-.007.669-.203.669-.683v-2.559c0-.469 0-.469.469-.469h10.195c.633 0 .793-.152.793-.78V4.733c0-.699-.164-.859-.883-.859zM11.478 18.5c0 .5-.013.5-.525.5-3.148 0-6.293 0-9.445.008-.32 0-.43-.078-.43-.418.016-3.16.008-6.324 0-9.48-.008-.34.086-.446.442-.446 3.187.012 6.363.008 9.55.008.117 0 .23.015.4.023 0 .18 0 .32.01.442-.003 3.113-.003 6.242-.003 9.363zm7.69-5.844c0 .102-.104.102-.104.102h-2.57c-.106 0-.106-.102-.106-.102v-.719c0-.101.105-.101.105-.101h.617s.102 0 .102-.102V8.656s0-.101-.102-.101h-.515c-.102 0-.102-.102-.102-.102v-.82c0-.106.102-.106.102-.106h2.367c.102 0 .102.106.102.106v.715c0 .105-.102.105-.102.105h-.516s-.101 0-.101.102v3.074s0 .105.1.105h.618c.106 0 .106.102.106.102zm0 0" />
    </svg>
  );
});

Tunein.propTypes = {
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

export default Tunein;
