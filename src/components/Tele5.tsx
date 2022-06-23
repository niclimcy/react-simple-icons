import * as React from 'react';

export type Tele5Props = React.ComponentPropsWithoutRef<'svg'> & {
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

const Tele5 = React.forwardRef<SVGSVGElement, Tele5Props>(function Tele5(
  { color = 'currentColor', size = 24, title = 'tele5', ...others },
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
      <path d='M6.441.682v12.894h9l-9.425 4.11a9.383 9.383 0 0012.351 4.85v.003a9.383 9.383 0 004.85-12.353l-7.694 3.353V8.293h7.5V.682zM.001.688v5.216h5.452V.688H3.607v2.484h-.439V.688h-.88v2.484h-.442V.688zm2.726 5.689v2.236H.002v2.723h5.453v-4.96zm.878 5.428v2.488h-.437v-2.486h-.88v2.486h-.442v-2.486H0v5.216h5.453v-5.218zM.002 17.467V23.2h2.732v-1.49h2.721v-2.703h-2.72v-1.54H.001z' />
    </svg>
  );
});

export default Tele5;
