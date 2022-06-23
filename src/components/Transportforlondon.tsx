import * as React from 'react';

export type TransportforlondonProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Transportforlondon = React.forwardRef<SVGSVGElement, TransportforlondonProps>(function Transportforlondon(
  { color = 'currentColor', size = 24, title = 'transportforlondon', ...others },
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
      <path d='M12 2.25a9.73 9.73 0 0 0-9.49 7.5H0v4.5h2.51a9.73 9.73 0 0 0 9.49 7.5c4.62 0 8.48-3.2 9.49-7.5H24v-4.5h-2.51A9.73 9.73 0 0 0 12 2.25zM12 6c2.5 0 4.66 1.56 5.56 3.75H6.44A6.02 6.02 0 0 1 12 6zm-5.56 8.25h11.12A6.02 6.02 0 0 1 12 18a6.02 6.02 0 0 1-5.56-3.75Z' />
    </svg>
  );
});

export default Transportforlondon;
