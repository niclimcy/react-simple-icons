import * as React from 'react';

export type MediamarktProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Mediamarkt = React.forwardRef<SVGSVGElement, MediamarktProps>(function Mediamarkt(
  { color = 'currentColor', size = 24, title = 'mediamarkt', ...others },
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
      <path d='M19.829 22.075c-.064.192 2.63-2.76 2.63-2.76-.256-2.759-1.54-5.775-1.54-5.775-2.117-4.428-6.801-5.904-9.56-3.53-.129.065-.322.129-.45.193 2.118-2.952 6.93-2.695 10.075.963 0 0 1.412 1.732 2.438 4.363.257-.898.45-1.86.514-2.823-1.669-2.31-3.594-3.658-3.594-3.658-3.978-2.695-8.663-1.732-9.946 1.604-.129.193-.257.385-.321.578.385-3.594 4.684-5.84 9.176-4.3 0 0 2.182.835 4.428 2.631 0-.128-.064-.256-.128-.449-.257-.962-.578-1.86-1.027-2.695-2.567-1.155-4.877-1.347-4.877-1.347-4.877-.321-8.535 3.08-7.765 6.802v.513c-1.668-3.337.963-7.636 5.776-8.535 0 0 2.246-.385 5.005 0a11.844 11.844 0 0 0-2.374-1.989c-2.76.32-4.813 1.283-4.813 1.283-4.428 2.182-5.84 7.06-3.401 9.819.064.192.192.32.32.449-3.08-2.054-2.887-7.123.77-10.396 0 0 1.733-1.476 4.3-2.503C14.375.193 13.283 0 12.193 0 10.01 1.668 8.79 3.465 8.79 3.465c-2.759 4.171-1.604 9.113 1.99 10.268h.064c.128.064.192.128.32.192-3.657-.192-6.031-4.684-4.427-9.369 0 0 .77-2.053 2.374-4.171-.962.257-1.796.578-2.63 1.09-1.027 2.568-1.284 4.75-1.284 4.75-.321 4.94 3.016 8.599 6.61 7.893H12c.128 0 .257 0 .385-.065-3.273 1.669-7.444-1.026-8.406-5.903 0 0-.385-2.182 0-4.941-.77.77-1.476 1.604-2.054 2.63.321 2.696 1.284 4.685 1.284 4.685 2.181 4.492 6.994 5.968 9.754 3.401l.064-.064c.128-.064.256-.128.32-.257-1.989 3.145-6.994 3.016-10.203-.77 0 0-1.604-2.117-2.438-4.556 0-.064-.642 3.209-.642 3.209 1.604 1.925 3.658 3.529 3.658 3.529 3.979 2.695 8.663 1.668 9.946-1.668a1.39 1.39 0 0 0 .321-.514c-.385 3.594-4.684 5.84-9.176 4.236 0 0-1.99-.77-4.107-2.439 0 .064.064.193.064.257a15.14 15.14 0 0 0 1.091 2.823c2.438 1.027 4.62 1.22 4.62 1.22 4.877.32 8.47-3.08 7.765-6.674v-.514c1.54 3.337-1.09 7.508-5.84 8.47 0 0-2.117.386-4.748 0a11.229 11.229 0 0 0 2.117 1.798c2.76-.321 4.813-1.284 4.813-1.284 4.3-2.117 5.776-6.802 3.53-9.625-.065-.193-.193-.385-.321-.578 2.952 2.118 2.76 7.059-.899 10.267 0 0-1.796 1.476-4.427 2.567 1.026.321 2.117.578 3.208.642 2.246-1.733 3.594-3.658 3.594-3.658 2.76-4.17 1.604-9.112-1.925-10.267a1.04 1.04 0 0 0-.45-.257c3.722.193 6.032 4.685 4.428 9.37 0 0-.77 2.245-2.567 4.491.129 0 .257-.064.45-.128a17.58 17.58 0 0 0 2.566-.963c1.091-2.63 1.284-4.94 1.284-4.94.32-4.878-2.888-8.472-6.417-7.958-.129 0-.321-.064-.45-.064h-.128c3.273-1.412 7.316 1.219 8.214 5.968 0 0 .578 2.246.128 4.94-.064.386-.256.963-.577 1.54z' />
    </svg>
  );
});

export default Mediamarkt;
