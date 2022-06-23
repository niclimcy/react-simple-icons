import * as React from 'react';

export type GhosteryProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Ghostery = React.forwardRef<SVGSVGElement, GhosteryProps>(function Ghostery(
  { color = 'currentColor', size = 24, title = 'ghostery', ...others },
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
      <path d='M22.058 19.93c-1.01-2.29-1.185-4.228-1.212-4.99V8.67C20.846 3.882 16.886 0 12 0S3.15 3.882 3.15 8.671v6.36c-.037.82-.236 2.7-1.207 4.899-1.306 2.955-.226 2.603.742 2.36.968-.242 3.13-1.192 3.805-.022.675 1.17 1.238 2.184 2.814 1.523 1.576-.663 2.318-.883 2.543-.883h.306c.225 0 .968.22 2.543.882 1.576.662 2.14-.353 2.814-1.522.676-1.17 2.837-.22 3.805.022.968.243 2.048.595.743-2.36M9.268 4.728c.953 0 1.725 1.198 1.725 2.676 0 1.478-.772 2.677-1.725 2.677-.953 0-1.726-1.198-1.726-2.677 0-1.478.773-2.676 1.726-2.676m2.73 10.697c-2.1 0-3.867-2.025-4.4-4.279 1.029 1.387 2.617 2.277 4.4 2.277 1.784 0 3.372-.89 4.401-2.277-.533 2.254-2.3 4.28-4.4 4.28m2.73-5.345c-.953 0-1.725-1.198-1.725-2.677 0-1.478.772-2.676 1.726-2.676.953 0 1.725 1.198 1.725 2.676 0 1.478-.772 2.677-1.725 2.677Z' />
    </svg>
  );
});

export default Ghostery;
