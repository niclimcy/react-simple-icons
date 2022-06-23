import * as React from 'react';

export type PreactProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Preact = React.forwardRef<SVGSVGElement, PreactProps>(function Preact(
  { color = 'currentColor', size = 24, title = 'preact', ...others },
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
      <path d='M 12,10.406 A 1.594,1.594 0 0 0 10.406,12 1.594,1.594 0 0 0 12,13.594 1.594,1.594 0 0 0 13.594,12 1.594,1.594 0 0 0 12,10.406 Z m 5.499,-4.33 a 2.998,2.998 0 0 1 0.643,0.054 1.668,1.668 0 0 1 0.48,0.172 1.085,1.085 0 0 1 0.29,0.235 1.032,1.032 0 0 1 0.185,0.315 1.454,1.454 0 0 1 0.084,0.452 c 0.007,0.195 -0.015,0.398 -0.058,0.603 -0.054,0.261 -0.14,0.521 -0.244,0.778 -0.137,0.334 -0.304,0.66 -0.49,0.978 -0.245,0.417 -0.52,0.818 -0.817,1.207 -0.145,0.191 -0.3,0.376 -0.455,0.561 -0.22,-0.238 -0.443,-0.472 -0.673,-0.7 a 23.61,23.61 0 0 0 -2.05,-1.797 l -0.23,0.296 0.23,-0.296 -0.018,-0.014 -0.461,0.592 0.018,0.014 a 22.864,22.864 0 0 1 1.984,1.74 c 0.241,0.237 0.475,0.48 0.703,0.73 -0.099,0.108 -0.194,0.22 -0.296,0.326 -0.099,0.104 -0.2,0.207 -0.301,0.308 l 0.53,0.53 c 0.106,-0.105 0.21,-0.212 0.313,-0.32 0.085,-0.088 0.164,-0.182 0.248,-0.272 0.065,0.078 0.135,0.152 0.198,0.231 a 13.317,13.317 0 0 1 0.909,1.262 c 0.211,0.336 0.404,0.681 0.564,1.036 a 5.23,5.23 0 0 1 0.293,0.806 3.019,3.019 0 0 1 0.102,0.637 c 0.008,0.178 -0.007,0.351 -0.05,0.508 -0.034,0.123 -0.087,0.239 -0.157,0.338 h -10e-4 c -0.068,0.098 -0.157,0.186 -0.26,0.256 -0.121,0.083 -0.264,0.146 -0.418,0.191 -0.188,0.054 -0.39,0.081 -0.6,0.09 -0.266,0.01 -0.538,-0.01 -0.814,-0.05 -0.357,-0.051 -0.713,-0.134 -1.067,-0.238 -0.464,-0.137 -0.92,-0.307 -1.369,-0.5 h -0.001 c -0.584,-0.253 -1.153,-0.543 -1.71,-0.86 L 12.708,16.26 c 0.578,-0.377 1.144,-0.77 1.686,-1.194 l -0.21,-0.27 0.211,0.27 0.018,-0.015 -0.463,-0.59 -0.017,0.014 c -0.695,0.542 -1.418,1.047 -2.168,1.505 A 18.53,18.53 0 0 1 9.938,16.963 C 9.465,17.182 8.984,17.378 8.494,17.539 A 8.68,8.68 0 0 1 7.352,17.835 C 7.066,17.887 6.781,17.921 6.499,17.925 6.277,17.928 6.061,17.912 5.856,17.87 5.681,17.834 5.518,17.778 5.376,17.698 5.265,17.635 5.166,17.556 5.086,17.464 5.007,17.373 4.944,17.265 4.901,17.149 4.85,17.012 4.823,16.857 4.817,16.696 a 2.54,2.54 0 0 1 0.058,-0.603 c 0.055,-0.261 0.14,-0.52 0.245,-0.777 a 7.704,7.704 0 0 1 0.49,-0.978 12.09,12.09 0 0 1 1.271,-1.767 c 0.232,0.251 0.469,0.497 0.712,0.737 a 23.645,23.645 0 0 0 2.02,1.765 l 0.461,-0.591 A 22.9,22.9 0 0 1 8.119,12.773 C 7.865,12.523 7.618,12.267 7.378,12.004 7.477,11.896 7.573,11.785 7.673,11.679 7.776,11.572 7.879,11.466 7.983,11.362 l -0.53,-0.53 C 7.345,10.94 7.238,11.05 7.132,11.16 7.047,11.249 6.967,11.343 6.884,11.433 6.829,11.367 6.77,11.305 6.715,11.238 6.386,10.832 6.077,10.411 5.799,9.975 5.585,9.637 5.391,9.292 5.228,8.935 5.102,8.66 4.995,8.38 4.92,8.097 4.863,7.882 4.826,7.669 4.818,7.46 A 1.67,1.67 0 0 1 4.868,6.953 C 4.902,6.829 4.955,6.714 5.025,6.614 H 5.026 C 5.094,6.516 5.184,6.428 5.286,6.358 A 1.446,1.446 0 0 1 5.705,6.168 C 5.892,6.113 6.094,6.086 6.304,6.078 a 4.545,4.545 0 0 1 0.814,0.048 7.708,7.708 0 0 1 1.067,0.24 12.092,12.092 0 0 1 1.369,0.5 17.248,17.248 0 0 1 1.736,0.874 24.003,24.003 0 0 0 -1.694,1.202 l 0.462,0.59 c 0.683,-0.534 1.393,-1.031 2.13,-1.484 0.594,-0.363 1.203,-0.697 1.83,-0.99 0.474,-0.222 0.956,-0.42 1.448,-0.583 A 8.816,8.816 0 0 1 16.612,6.172 C 16.91,6.116 17.207,6.08 17.499,6.076 Z m -0.01,-0.75 -0.001,0 C 17.142,5.331 16.804,5.373 16.474,5.434 A 9.546,9.546 0 0 0 15.229,5.763 14.202,14.202 0 0 0 13.7,6.379 C 13.117,6.651 12.554,6.961 12.004,7.289 11.883,7.216 11.761,7.144 11.637,7.074 11.06,6.745 10.466,6.442 9.852,6.177 9.38,5.974 8.897,5.792 8.397,5.646 8.017,5.534 7.625,5.442 7.225,5.384 6.916,5.34 6.599,5.316 6.275,5.329 6.021,5.339 5.759,5.372 5.499,5.446 5.281,5.51 5.063,5.602 4.863,5.74 A 1.774,1.774 0 0 0 4.146,6.754 C 4.078,7.001 4.059,7.251 4.069,7.491 a 3.728,3.728 0 0 0 0.127,0.798 6.016,6.016 0 0 0 0.351,0.959 9.548,9.548 0 0 0 0.62,1.128 14.203,14.203 0 0 0 0.967,1.335 c 0.08,0.098 0.166,0.19 0.248,0.286 C 6.193,12.219 6.007,12.443 5.83,12.676 5.519,13.084 5.226,13.51 4.963,13.958 A 8.44,8.44 0 0 0 4.425,15.033 5.28,5.28 0 0 0 4.142,15.941 C 4.089,16.19 4.059,16.453 4.069,16.723 a 2.182,2.182 0 0 0 0.13,0.688 v 10e-4 a 1.775,1.775 0 0 0 0.81,0.94 2.403,2.403 0 0 0 0.697,0.253 3.699,3.699 0 0 0 0.805,0.07 5.97,5.97 0 0 0 0.977,-0.102 l 10e-4,-0.001 a 9.412,9.412 0 0 0 1.24,-0.32 c 0.523,-0.173 1.031,-0.38 1.526,-0.61 0.599,-0.278 1.178,-0.593 1.742,-0.93 0.121,0.072 0.243,0.144 0.366,0.214 a 17.99,17.99 0 0 0 1.785,0.898 12.832,12.832 0 0 0 1.455,0.53 c 0.38,0.112 0.772,0.204 1.172,0.262 a 5.284,5.284 0 0 0 0.95,0.056 c 0.254,-0.01 0.516,-0.044 0.776,-0.118 0.218,-0.063 0.436,-0.156 0.636,-0.294 a 1.775,1.775 0 0 0 0.717,-1.014 c 0.068,-0.248 0.087,-0.497 0.077,-0.736 -0.011,-0.277 -0.06,-0.544 -0.127,-0.799 -0.085,-0.322 -0.202,-0.629 -0.335,-0.923 -0.178,-0.393 -0.387,-0.767 -0.612,-1.127 -0.294,-0.466 -0.618,-0.908 -0.959,-1.333 -0.09,-0.111 -0.188,-0.216 -0.28,-0.324 0.189,-0.222 0.374,-0.447 0.552,-0.679 0.311,-0.409 0.604,-0.835 0.867,-1.283 A 8.441,8.441 0 0 0 19.575,8.967 5.277,5.277 0 0 0 19.858,8.06 C 19.911,7.81 19.941,7.547 19.931,7.277 19.924,7.051 19.886,6.817 19.801,6.589 V 6.588 a 1.775,1.775 0 0 0 -0.81,-0.94 C 18.767,5.522 18.529,5.444 18.294,5.396 A 3.7,3.7 0 0 0 17.489,5.326 Z M 12,0 22.392,6 V 18 L 12,24 1.607,18 V 6 Z' />
    </svg>
  );
});

export default Preact;
