import * as React from 'react';

export type PulumiProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Pulumi = React.forwardRef<SVGSVGElement, PulumiProps>(function Pulumi(
  { color = 'currentColor', size = 24, title = 'pulumi', ...others },
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
      <path d='M11.997 0C10.226 0 8.79.83 8.79 1.856c0 1.025 1.436 1.856 3.207 1.856 1.772 0 3.208-.831 3.208-1.856C15.205.83 13.77 0 11.997 0zM5.95 3.488c-1.772 0-3.208.83-3.208 1.856C2.742 6.369 4.178 7.2 5.95 7.2c1.771 0 3.207-.831 3.207-1.856 0-1.025-1.436-1.856-3.207-1.856zm12.103 0c-1.772 0-3.208.83-3.208 1.856 0 1.025 1.436 1.856 3.208 1.856 1.771 0 3.207-.831 3.207-1.856 0-1.025-1.436-1.856-3.207-1.856zm-6.056 3.495c-1.771 0-3.207.831-3.207 1.856 0 1.025 1.436 1.856 3.207 1.856 1.772 0 3.208-.83 3.208-1.856 0-1.025-1.436-1.856-3.208-1.856zm-10.127.67a1.157 1.157 0 0 0-.55.151c-.888.513-.89 2.172-.004 3.706.886 1.534 2.324 2.362 3.211 1.85.888-.513.89-2.171.003-3.706-.72-1.246-1.803-2.027-2.66-2zm20.257.004c-.857-.026-1.941.754-2.661 2-.886 1.535-.884 3.194.003 3.707.888.512 2.325-.316 3.211-1.85.886-1.534.885-3.193-.003-3.706a1.157 1.157 0 0 0-.55-.15zm-6.048 3.492c-.857-.026-1.94.754-2.66 2-.886 1.535-.885 3.194.003 3.706.887.513 2.325-.316 3.21-1.85.887-1.534.885-3.193-.003-3.706a1.157 1.157 0 0 0-.55-.15zm-8.16.001a1.157 1.157 0 0 0-.55.151c-.888.513-.89 2.172-.004 3.706.886 1.535 2.324 2.363 3.211 1.85.888-.512.89-2.171.003-3.705-.72-1.247-1.803-2.028-2.66-2.002zm-6.047 3.494a1.157 1.157 0 0 0-.55.151c-.888.513-.89 2.172-.004 3.706.886 1.534 2.324 2.362 3.212 1.85.887-.513.888-2.172.003-3.706-.72-1.246-1.804-2.027-2.661-2.001zm20.258.002c-.857-.026-1.941.755-2.66 2.001-.887 1.535-.885 3.193.003 3.706.887.512 2.325-.316 3.21-1.85.886-1.534.885-3.193-.003-3.706a1.157 1.157 0 0 0-.55-.15zm-6.047 3.492c-.858-.026-1.942.754-2.661 2-.886 1.535-.885 3.194.003 3.706.888.513 2.325-.315 3.21-1.85.887-1.533.885-3.193-.002-3.705a1.157 1.157 0 0 0-.55-.151zm-8.163.003a1.157 1.157 0 0 0-.55.151c-.887.513-.889 2.172-.003 3.706.886 1.534 2.323 2.363 3.211 1.85.888-.512.89-2.171.004-3.706-.72-1.246-1.804-2.027-2.662-2z' />
    </svg>
  );
});

export default Pulumi;
