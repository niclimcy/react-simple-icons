import * as React from 'react';

export type AppannieProps = {
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

const Appannie = React.forwardRef<SVGSVGElement, AppannieProps>(function Appannie(
  { color = 'currentColor', size = 24, title = 'appannie', ...others },
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
      <path d='M7.834 10.525l2.958 8.975-8.873-8.975zm8.325 0h5.862l-8.793 8.974zm-1.02-.401l-3.169 9.691-3.17-9.691 3.17-3.231zM9.328 2.796h5.326L11.99 5.43zm6.7 6.712L12.75 6.213l3.027-3.043 6.305 6.338zM11.25 6.232L7.999 9.508h-6.08L8.211 3.17zm4.634-4.447l-.006-.006H8.121C5.414 4.529 2.706 7.279 0 10.03l12 12.192c4-4.064 8.001-8.127 12-12.192l-8.115-8.244' />
    </svg>
  );
});

export default Appannie;