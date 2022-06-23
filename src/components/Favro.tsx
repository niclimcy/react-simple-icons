import * as React from 'react';

export type FavroProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Favro = React.forwardRef<SVGSVGElement, FavroProps>(function Favro(
  { color = 'currentColor', size = 24, title = 'favro', ...others },
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
      <path d='M11.586 1.655a6.623 6.623 0 0 0-6.62 6.62v.773a7.503 7.503 0 0 1 3.31 3.269V8.276a3.302 3.302 0 0 1 3.31-3.31A1.66 1.66 0 0 0 13.24 3.31a1.66 1.66 0 0 0-1.656-1.655zm-9.93 7.448A1.66 1.66 0 0 0 0 10.758c0 .91.745 1.655 1.655 1.655a3.302 3.302 0 0 1 3.31 3.31v4.966c0 .91.745 1.655 1.655 1.655a1.66 1.66 0 0 0 1.655-1.655v-4.966a6.623 6.623 0 0 0-6.62-6.621zm15.724 0a6.623 6.623 0 0 0-6.622 6.621 6.623 6.623 0 0 0 6.622 6.621 6.583 6.583 0 0 0 3.462-.979c.262.58.84.98 1.503.98A1.66 1.66 0 0 0 24 20.69v-9.93a1.66 1.66 0 0 0-1.655-1.655c-.676 0-1.241.4-1.503.979a6.574 6.574 0 0 0-3.462-.98zm0 3.311a3.303 3.303 0 0 1 3.31 3.31 3.303 3.303 0 0 1-3.31 3.31 3.302 3.302 0 0 1-3.31-3.31 3.303 3.303 0 0 1 3.31-3.31z' />
    </svg>
  );
});

export default Favro;
