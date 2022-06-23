import * as React from 'react';

export type ApacheechartsProps = React.ComponentPropsWithoutRef<'svg'> & {
  /**
   * Hex color or color name
   */
  title?: string;
  /**
   * The size of the Icon.
   */
  color?: string;
  /**
   * The title provides an accessible short text description to the SVG
   */
  size?: string | number;
};

const Apacheecharts = React.forwardRef<SVGSVGElement, ApacheechartsProps>(function Apacheecharts(
  { color = 'currentColor', size = 24, title = 'apacheecharts', ...others },
  ref,
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 24 24'
      ref={ref}
      {...others}
    >
      <title>{title}</title>
      <path d='M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm-.792 5.307c2.192-.025 4.366 1.134 5.43 3.304.909 1.852.878 3.61-.098 5.645-.477.995-.487 1.06-.241 1.578.214.452.727.779 1.221.779.454 0 1.15-.586 1.252-1.054.1-.454-.193-1.118-.607-1.377a10.11 10.11 0 0 1-.393-.255c-.129-.1.42-.38.741-.38.687 0 1.247.526 1.375 1.29.055.333.134.422.44.502.859.222 1.297 1.451.755 2.116-.22.27-.23.271-.305.042-.267-.801-.666-1.12-1.403-1.12-.319 0-.572.128-1.098.556-1.006.82-1.866 1.303-2.907 1.632-1.276.384-2.752.478-4.086.156-2.162-.431-4.232-2.11-5.252-4.257C4.758 11.782 5.135 9 7.033 7.077a5.924 5.924 0 0 1 4.175-1.77Z' />
    </svg>
  );
});

export default Apacheecharts;
