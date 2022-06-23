import * as React from 'react';

export type RainmeterProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Rainmeter = React.forwardRef<SVGSVGElement, RainmeterProps>(function Rainmeter(
  { color = 'currentColor', size = 24, title = 'rainmeter', ...others },
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
      <path d='M12.7 1.088L12 0l-.7 1.088c-.751 1.168-7.342 11.525-7.342 15.366C3.958 20.615 7.565 24 12 24s8.042-3.385 8.042-7.546c0-3.84-6.591-14.197-7.342-15.366zM12 22.335c-3.516 0-6.377-2.638-6.377-5.881C5.623 13.908 9.732 6.756 12 3.1c2.268 3.656 6.377 10.809 6.377 13.355 0 3.242-2.861 5.88-6.377 5.88zm4.957-6.017c0 2.548-2.22 4.615-4.957 4.615-2.737 0-4.957-2.067-4.957-4.615 0-.163.021-.347.058-.549 0 0 1.306-2.616 4.847 0 2.999 2.215 4.95 0 4.95 0 .038.202.059.386.059.549z' />
    </svg>
  );
});

export default Rainmeter;
