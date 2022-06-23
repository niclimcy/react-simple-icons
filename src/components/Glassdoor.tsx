import * as React from 'react';

export type GlassdoorProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Glassdoor = React.forwardRef<SVGSVGElement, GlassdoorProps>(function Glassdoor(
  { color = 'currentColor', size = 24, title = 'glassdoor', ...others },
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
      <path d='M17.144 20.572H3.43C3.43 22.465 4.963 24 6.856 24h10.286c1.893 0 3.428-1.535 3.428-3.428V6.492c0-.07-.054-.125-.124-.125h-3.18c-.067 0-.123.056-.123.126v14.08zm0-20.572c1.892 0 3.427 1.535 3.427 3.43H6.858v14.078c0 .068-.056.125-.125.125H3.554c-.07 0-.125-.057-.125-.125V3.428C3.43 1.536 4.963 0 6.856 0h10.287' />
    </svg>
  );
});

export default Glassdoor;
