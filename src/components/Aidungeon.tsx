import * as React from 'react';

export type AidungeonProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Aidungeon = React.forwardRef<SVGSVGElement, AidungeonProps>(function Aidungeon(
  { color = 'currentColor', size = 24, title = 'aidungeon', ...others },
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
      <path d='M0 0v24h24V0zm5.646 13.002H7.21c.117 0 .213.095.213.213v.123c0 .117-.096.21-.213.21h-.457v1.68h.457c.117 0 .213.096.213.213v.123c0 .118-.096.211-.213.211H5.646a.21.21 0 01-.21-.21v-.124c0-.117.093-.212.21-.212h.46v-1.68h-.46a.21.21 0 01-.21-.211v-.123c0-.118.093-.213.21-.213zm-2.833.023h.958c.13 0 .19.093.235.235l.756 1.974h.06c.13 0 .235.105.235.235v.09c0 .13-.105.234-.235.234h-.816a.234.234 0 01-.235-.234v-.09c0-.13.105-.235.235-.235h.101l-.074-.224h-.969l-.078.224h.178a.2.2 0 01.201.202v.132a.2.2 0 01-.2.202H2.35a.2.2 0 01-.202-.202v-.132a.2.2 0 01.202-.202h.113l.625-1.707h-.276a.234.234 0 01-.234-.234v-.033c0-.13.105-.235.235-.235zm.748.557l-.317.908h.617zm14.109 3.885h.002c.736 0 1.333.649 1.332 1.449 0 .8-.597 1.448-1.332 1.447-.736 0-1.332-.647-1.332-1.447-.001-.8.595-1.448 1.33-1.45zm-4.71.002c.118 0 .212.097.212.219 0 .226-.004.447 0 .671 0 0 .036.268-.223.264-.285-.004-.198-.263-.408-.514-.085-.1-.14-.124-.377-.127-.387-.003-.736.16-.734.9 0 .391.143.931.68.956.156.007.452-.072.452-.072v-.348h-.289a.218.218 0 01-.218-.219v-.082c0-.121.097-.219.218-.219h.977c.121 0 .219.098.219.22v.081a.218.218 0 01-.219.219h-.068l.004.686s-.3.26-1.088.253c-.995-.007-1.356-.78-1.354-1.437.003-.855.61-1.433 1.244-1.441.332-.005.583.078.778.17.02-.1.093-.18.195-.18zm.868.062h1.985c.12 0 .218.098.218.219v.64a.218.218 0 01-.218.22h-.086a.218.218 0 01-.22-.22v-.312h-1.044c0 .006.006.01.006.016v.508h.375v-.055c0-.121.097-.219.219-.219h.054c.121 0 .219.098.219.219v.633a.218.218 0 01-.219.218h-.055a.218.218 0 01-.218-.218v-.055h-.375v.617c0 .003-.004.005-.004.008h1.043v-.313c0-.12.097-.218.219-.218h.086c.12 0 .218.097.218.218v.641a.218.218 0 01-.218.219h-1.985a.218.218 0 01-.219-.219v-.11c0-.12.098-.218.22-.218l.054-.008v-1.648c0-.006.005-.01.006-.016h-.06a.218.218 0 01-.22-.219v-.109c0-.121.098-.219.22-.219zm-10.264.002c.426.02 1.278.202 1.295 1.35.025 1.576-1.502 1.398-1.502 1.398h-.81a.218.218 0 01-.219-.218v-.07c0-.122.098-.22.219-.22h.062l.014-1.726h-.068a.218.218 0 01-.22-.219v-.07c0-.121.099-.219.22-.219.34 0 .673.007 1.01-.006zm1.725 0h.746c.121 0 .219.098.219.219v.088a.218.218 0 01-.219.219h-.08l.004 1.414c-.002.211.176.343.47.347.253.005.468-.132.471-.353v-1.404h-.074a.218.218 0 01-.219-.22v-.087c0-.121.098-.219.22-.219h.743c.122 0 .22.098.22.219v.088a.218.218 0 01-.22.218h-.08l-.004 1.29c0 .494-.24 1.015-1.062 1.015-.765 0-1.09-.457-1.076-1.021l-.006-1.287h-.053a.218.218 0 01-.219-.22v-.087c0-.121.098-.219.22-.219zm4.266.006h.816c.121 0 .219.098.219.219v.076a.218.218 0 01-.219.219h-.074l.017 2.16c-.014.053-.04.086-.123.105a.928.928 0 01-.308.006c-.09-.03-.14-.089-.194-.15l-.96-1.617.01 1.22h.212c.121 0 .219.098.219.22v.075a.218.218 0 01-.219.22h-.816a.218.218 0 01-.219-.22v-.076c0-.12.098-.218.219-.218h.043l.01-1.74h-.036a.218.218 0 01-.218-.22v-.054c0-.122.097-.22.218-.22h.5c.122 0 .158.054.246.22l.852 1.515.012-1.226h-.207a.218.218 0 01-.22-.219v-.076c0-.121.098-.219.22-.219zm11.25 0h.816c.121 0 .219.098.219.219v.076a.218.218 0 01-.219.219h-.074l.017 2.16c-.014.053-.04.086-.123.105a.928.928 0 01-.308.006c-.09-.03-.14-.089-.194-.15l-.96-1.617.01 1.22h.212c.121 0 .219.098.219.22v.075a.218.218 0 01-.219.22h-.816a.218.218 0 01-.219-.22v-.076c0-.12.098-.218.219-.218h.043l.01-1.74h-.036a.218.218 0 01-.218-.22v-.054c0-.121.097-.219.218-.219h.5c.122 0 .158.053.247.219L21 19.279l.012-1.226h-.207a.218.218 0 01-.22-.219v-.076c0-.121.098-.219.22-.219zm-3.768 1.377c0 .5.285.904.635.904.35 0 .634-.404.635-.904 0-.5-.284-.906-.635-.906-.39 0-.632.503-.635.906zm-13.783-.869l.006 1.707c.347-.026.924.007.922-.861-.003-.84-.673-.856-.928-.846z' />
    </svg>
  );
});

export default Aidungeon;
