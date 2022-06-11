import * as React from 'react';

export type IbmcloudProps = {
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

const Ibmcloud = React.forwardRef<SVGSVGElement, IbmcloudProps>(function Ibmcloud(
  { color = 'currentColor', size = 24, title = 'ibmcloud', ...others },
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
      <path d='M11.712 1.508c-.18.172-.18.18-.18 1.567 0 1.36 0 1.395.166 1.546.216.201.374.201.59-.022.18-.172.18-.187.18-1.545 0-1.36 0-1.374-.18-1.546-.094-.1-.223-.18-.288-.18-.065 0-.194.08-.288.18zM5.35 3.198a.495.495 0 0 0-.144.294c0 .18 1.244 2.351 1.453 2.524.079.072.2.13.266.13.18 0 .438-.267.438-.447 0-.165-1.15-2.214-1.387-2.487-.18-.194-.44-.202-.626-.015zm12.676.014c-.237.266-1.388 2.322-1.388 2.487 0 .18.26.446.439.446a.505.505 0 0 0 .266-.13c.194-.165 1.452-2.357 1.452-2.53 0-.18-.273-.43-.467-.43-.086 0-.223.07-.302.157zm-7.55 3.25c-3.27.625-5.902 3.242-6.456 6.434-.266 1.482.065 3.818.532 3.818.18 0 .2-.13.13-.79-.094-.849-.015-2.46.15-3.107a7.773 7.773 0 0 1 2.042-3.515c1.51-1.496 3.452-2.244 5.55-2.129 1.777.101 3.395.74 4.81 1.927.483.403.627.44.627.158 0-.15-.13-.323-.532-.719-.957-.934-2.157-1.603-3.567-1.977-.704-.187-2.523-.244-3.285-.1zM.69 7.813c-.165.21-.165.403 0 .59.158.172 2.114 1.344 2.409 1.438.194.064.525-.209.525-.424 0-.26-.18-.41-1.338-1.072C1.2 7.735.856 7.612.69 7.813zm21.009.547c-1.294.747-1.323.77-1.323 1.013 0 .28.158.46.403.46.194-.007 2.192-1.1 2.494-1.365.15-.144.159-.475.008-.626-.21-.209-.482-.122-1.582.518zm-4.523 1.955c-.64.094-1.804.496-2.185.748-.21.144-.338.288-.352.396-.022.15-.008.165.18.13.107-.023.46-.138.776-.253.812-.302 1.524-.402 2.538-.352 1.423.065 2.4.49 3.393 1.488 1.029 1.021 1.496 2.121 1.56 3.638.137 3.063-1.66 5.098-4.903 5.565-.726.1-12.755.094-13.43-.007-1.985-.31-3.452-1.61-3.79-3.358-.13-.64-.057-1.94.137-2.48.288-.827.597-1.287 1.309-1.999.467-.46.683-.719.64-.776-.144-.238-1.043.266-1.74.977-.518.525-.87 1.122-1.115 1.855-.165.504-.194.69-.194 1.51 0 1.064.108 1.568.503 2.373.496 1.014 1.25 1.74 2.366 2.272 1.337.64 1.466.654 9.059.618 6.24-.02 6.492-.029 7.118-.172 2.567-.59 4.192-2.085 4.796-4.408.122-.489.158-.826.158-1.653.007-1.28-.108-1.812-.62-2.855a5.995 5.995 0 0 0-1.767-2.12c-.518-.382-1.445-.82-2.1-.986-.654-.165-1.754-.237-2.337-.15z' />
    </svg>
  );
});

export default Ibmcloud;