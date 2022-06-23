import * as React from 'react';

export type NorwegianProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Norwegian = React.forwardRef<SVGSVGElement, NorwegianProps>(function Norwegian(
  { color = 'currentColor', size = 24, title = 'norwegian', ...others },
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
      <path d='M23.6958 11.0552c-.4325-.2169-.859-.4105-1.3045-.6303.0553-.1311.0729-.2447.0321-.3742l-.1936-.2126-.2752.0452-.2839.15c-.0366-.0248-.1802-.0952-.2285-.1151l.2096-.1309c.3495-.2431.7134-.4703 1.054-.7381.3306-.2533.6697-.5067.8895-.8575.0524-.1034.1325-.2169.1005-.348l-.0641-.1121-.1062-.0596-.2287-.0903c-.1961-.0356-.4086-.0768-.6128-.07-.262.0132-.5183.0656-.773.1325-.3639.0975-.7774.2839-1.2243.5212-.4746.2518-.9158.5532-1.3598.8749-.067-.0962-.2038-.198-.3407-.182-.2315.051-.447.2315-.626.3814-.0905-.0112-.2123-.0457-.3029-.0568-.4032-.0655-.8298-.1106-1.2258-.1529-.3014-.0495-.6115-.0873-.9157-.1178-.2591-.0263-.4513-.07-.6974-.0568l-.3086.1688-.2184.2025.0058.083c.1544.0771.3276.0858.479.1498.4331.1063.6198.1637 1.1268.2825.2605.0611.3276.0873.594.1615.2649.1092.5226.2446.773.3581-.2581.1862-.6244.4367-.9201.6158l-.2199.1034-.2198-.0655c-.3392-.1485-.5983-.265-.8996-.3975l-.2883.0758-.0917.0495-.0699.1064.0626.1295c.1703.1761.3291.3508.5008.5212l-.0073.0059c-.1194-.0175-.2824-.0335-.4192-.0467-.1369-.0422-.2985-.0014-.4164.0801l.0146.1426c.2925.1329.6685.1987.9724.3268-5.325 2.3881-10.4741 3.4815-12.5049 3.2365-1.8242-.2198-1.6145-3.2508 1.2753-5.6704l-.757.0015c-3.641 2.8811-4.8872 6.3881-2.341 6.9064 2.8282.5741 8.586-1.2302 14.5229-4.2179.1495.0589.2871-.0412.4133-.0688.3201.0788.6532.1774.9768.2489l.1864-.0596.0364-.0524c-.0495-.1587-.2038-.2214-.3072-.348.3058-.0903.6057-.1965.9056-.2985.4658-.1601.8633-.3537 1.2869-.5459.2722.0306.5401.0394.8095.0452.2242.0102.4381 0 .6566.0335.179.0058.3217.0334.5037.064.5126.0973 1.0251.186 1.5329.2985.1952.0495.364.0844.5562.1295.1864-.0087.3319-.1267.4906-.2052L24 11.2153l-.3042-.1601zm-5.9365-.2548c-.3493.1849-.7351.3989-1.2476.626-.1325.0597-.2737.0947-.4279.0655l-.2127-.0291c-.2119-.2186-.449-.4343-.658-.6595l.1209-.067h.0465c.3563.1553.6744.3307 1.0337.4834l.3072-.0859c.4521-.279.801-.4989 1.2228-.7657.1427.0582.2053.0873.3422.1426-.1791.1063-.3567.198-.5271.2897zm.7741-1.0166l-.0773-.1325.019-.2664.0539-.0466c.0755-.0582.2389-.1644.3245-.2053l.0146.2563.0698.1296c-.1367.0873-.2662.1892-.4045.2649zm2.0358-.8299c-.1499.0961-.4643.3567-.4731.3684-.2388-.0292-.463-.0349-.6901-.0597l.0465-.0248c.3029-.2475.5708-.4076.9071-.6129.2983-.1806.7395-.4164 1.1035-.5707.3276-.1267.6609-.2315 1.0176-.2838.198-.0291.3945-.0452.5926.0188-.2169.048-.348.0859-.5824.1835-.2038.0844-.5284.2154-.7905.3436-.3872.1936-.7118.3697-1.1312.6376z' />
    </svg>
  );
});

export default Norwegian;
