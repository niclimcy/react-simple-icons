import * as React from 'react';

export type SparkasseProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Sparkasse = React.forwardRef<SVGSVGElement, SparkasseProps>(function Sparkasse(
  { color = 'currentColor', size = 24, title = 'sparkasse', ...others },
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
      <path d='M7.0602 12.3061v1.8455h14.175v6.7773c.0296 1.6615-1.4064 3.1066-3.0705 3.0705H5.8352c-1.6582.0306-3.1011-1.4121-3.0705-3.0705v-1.225H16.908v-1.8455H2.7648v-6.7773c-.0307-1.6579 1.4123-3.1012 3.0704-3.0704h12.3295c1.6641-.0363 3.1 1.4095 3.0705 3.0705v1.225H7.0602zm4.9241-6.1486c1.7003 0 3.0787-1.3784 3.0787-3.0787S13.6847 0 11.9843 0 8.9055 1.3784 8.9055 3.0788s1.3785 3.0787 3.0788 3.0787z' />
    </svg>
  );
});

export default Sparkasse;
