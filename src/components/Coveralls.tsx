import * as React from 'react';

export type CoverallsProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Coveralls = React.forwardRef<SVGSVGElement, CoverallsProps>(function Coveralls(
  { color = 'currentColor', size = 24, title = 'coveralls', ...others },
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
      <path d='M0 12v12h24V0H0zm13.195-6.187l1.167 3.515 2.255.005c1.238.005 2.916.019 3.727.037l1.472.028-2.968 2.152c-1.63 1.181-2.976 2.18-2.99 2.212-.01.033.487 1.627 1.106 3.54.619 1.917 1.12 3.487 1.116 3.492-.005.01-1.35-.947-2.986-2.119-1.636-1.177-3-2.147-3.033-2.161-.028-.01-1.411.947-3.07 2.138-1.655 1.185-3.02 2.151-3.024 2.142-.004-.005.497-1.575 1.116-3.492.619-1.913 1.115-3.507 1.106-3.54-.014-.032-1.36-1.03-2.99-2.212L2.23 9.398l1.472-.028c.811-.018 2.49-.032 3.727-.037l2.254-.005 1.168-3.515a512.54 512.54 0 011.171-3.516c.005 0 .53 1.58 1.172 3.516z' />
    </svg>
  );
});

export default Coveralls;
