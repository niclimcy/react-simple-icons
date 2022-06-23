import * as React from 'react';

export type WebhintProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Webhint = React.forwardRef<SVGSVGElement, WebhintProps>(function Webhint(
  { color = 'currentColor', size = 24, title = 'webhint', ...others },
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
      <path d='M12 0C5.335 0 0 5.334 0 12c0 6.667 5.334 12 12 12 6.667 0 12-5.333 12-12-.06-6.666-5.393-12-12-12zm0 1.333c5.846.06 10.552 4.82 10.546 10.667 0 5.818-4.727 10.606-10.606 10.606S1.394 17.817 1.394 11.939C1.394 6.062 6.174 1.333 12 1.333zm7.334 5.273l-2.667 1.576c-.06.06-.122.06-.182.12a.843.843 0 000 1.152c.12.122.243.183.364.183.303.06.605 0 .787-.183.06-.06.122-.121.183-.242l.363-.727zM13.516 8c-4.121 0-4.788 1.94-4.788 4.364.06.606 0 1.212-.303 1.758-.303.545-.91.908-1.516.847-.242 0-1.151-.181-1.212-.423h.121c.97 0 1.758-.788 1.758-1.819v-.485h-.849c-.606 0-1.151.304-1.515.788a2.152 2.152 0 00-1.576-.726h-.848v.363c0 1.03.849 1.879 1.94 1.879h.303c0 .606.848 3.03 7.09 3.03 2.425 0 6.061-.425 6.061-5.03-.06-.789-.303-1.637-.727-2.303-.182.06-.303.06-.485.06a1.344 1.344 0 01-1.333-1.333c0-.121 0-.303.06-.425A3.565 3.565 0 0013.516 8z' />
    </svg>
  );
});

export default Webhint;
