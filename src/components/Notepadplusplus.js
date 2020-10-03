import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Notepadplusplus = forwardRef(function Notepadplusplus(
  { color = 'currentColor', size = 24, title = 'Notepad++', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M13.674 2.398c.506-.405 1.214-.203 1.822-.203.709.304 1.215.911 1.62 1.519.202.202.405.607.708.607.405-.304.71-.607 1.114-.81 1.012-.303 2.126-.506 3.037 0 .506.506.709 1.215.81 1.924-.101 1.316-.607 2.632-1.518 3.543-.304.101-.507.203-.81.304.202.405.506.81.607 1.316.101.304-.304.506-.506.709-.911.81-2.227 1.012-3.442 1.215-.304-.102-.506-.102-.81-.203.101.405.304.911.506 1.316.203-.101.506-.202.709-.304.405 0 .81.304 1.113.507.81 0 1.62-.102 2.329 0 1.012.303 2.126.1 3.037.708v.304c-1.114.304-2.328.304-3.442.81-.506.304-1.114.101-1.62 0-.405.607-1.012 1.114-1.822 1.114-.608-.102-1.013-.608-1.316-1.114h-1.823c-.303.202-.506.506-.81.405-.303 0-.506-.304-.708-.405H10.23c-.91 0-1.923-.101-2.834.101-.405.203-.81-.202-1.215-.303H4.967c-.101 1.214.607 2.43 1.215 3.442.405.708 1.012 1.518 1.923 1.72.71.203 1.62.203 2.126-.404.405-1.013-.1-2.025-.607-2.835-.506.203-1.316.203-1.417.911.202.101.405.304.607.405 0-.202-.101-.506-.101-.709.405.102 1.012.304.911.81-.202.405-.709.507-1.114.608-.607 0-.91-.608-1.214-1.114-.304-.506.1-1.012.506-1.215.405-.202.607-.607 1.113-.708.709 0 1.62.1 2.025.81.608 1.012 1.215 2.43.506 3.644-.1.304-.405.304-.607.405-.304.101-.608.405-1.012.506-1.013.203-2.228.203-3.038-.405-.91-.708-1.518-1.822-2.126-2.834-.506-.911-.708-1.924-.91-2.936H.512c-.608-.203-.503-.9-.507-1.418.405-.202.81-.303 1.114-.405.304-.1.709.102 1.012.102.507-.102 1.013-.102 1.418-.304 0 0 .1-.101.202-.101.101-.405.101-.81.203-1.114v1.316h.607c.405-.91.709-1.72 1.417-2.227.203-.203.304-.405.507-.506.202-.101.405.101.506.303-.608.71-.405 1.722.101 2.43-.304.203-.607.506-.911.81.202.608.709.81 1.316 1.013-.506-.405-1.012-.81-.911-1.418.202-.304.709-.202 1.012-.304-.202-.303-.506-.607-.607-.91 0-.608.202-1.114.405-1.62.101 0 .304.1.405.1 0 .203 0 .406.101.608.506.304 1.012.304 1.62.405a4.16 4.16 0 002.227 0v-.506c.101-.304.203-.81.608-.608 0 .405-.102.81-.102 1.215s.203.709.405.911c.608.71.101 1.823 1.013 2.43-.102-.405-.203-.708-.304-1.113v-.102c.101-.405.607-.607.911-.708-.202-.507-.81-.102-1.012.202a4.375 4.375 0 01-.608-.709v-.607c-.101-.506 0-1.114.304-1.62h.405c-.101.405-.203.81-.304 1.114.203 0 .405 0 .608.101.708.101 1.518-.101 2.126-.506l.607-.304c.405.203.81.405 1.215.304 1.012-.203 2.227-.405 3.037-1.215-.101-.202-.202-.405-.202-.607-.304-.405-.507-.912-.912-1.215-.404-.203-.91-.405-1.417-.608-.506.405-.709 1.013-1.113 1.418-.507.303-1.215.405-1.823.303-.708-.202-1.215-.607-1.822-1.012a2.697 2.697 0 01-.608-1.012c-.1-.304-.202-.507-.202-.81-.101-.304-.101-.81-.405-.911-1.114-.507-2.126-.81-3.138-.71-.81.305-1.721.406-2.43 1.114-1.013.912-1.62 2.126-2.025 3.443 0 .1-.101.202-.101.303 0 0 0 .102-.101.203-.203-.304-.405 0-.608.101.203-.709.405-1.316.709-1.924.506-1.316 1.316-2.53 2.632-3.24a6.108 6.108 0 011.924-.607c1.113 0 2.227.304 3.24.71.1-.912.303-1.722.708-2.532.101-.202.405-.405.709-.607m.81.405c-.81.1-1.317.81-1.52 1.518-.303.911-.404 1.924 0 2.835.102.405.203 1.012.608 1.215v.101c.608.607 1.62 1.012 2.531.81.304-.203.709-.405.912-.81.607-1.215.708-2.632.303-3.847-.303-.203-.708-.506-.91-.911-.406-.608-1.115-1.215-1.924-.911m3.442 2.227c0 .81.1 1.62 0 2.43.91.303 1.822.708 2.227 1.518.304-.405.81-.708 1.114-1.012.607-.911 1.214-2.227.708-3.341-.202-.709-1.012-1.012-1.72-.911-.81.202-1.823.506-2.33 1.316M5.879 11.914c-.304.506-.708 1.114-.607 1.721.405 0 .91 0 1.316-.202-.304-.506-.405-1.114-.203-1.62-.303 0-.405 0-.506.101m1.62.405c-.101.506 0 1.012.304 1.316.202-.202.405-.304.708-.506 0-.202.102-.405.102-.506-.304-.203-.81-.203-1.114-.304m7.998.203c.202.506.81.81 1.012 1.316-.1.202-.405.506-.202.708.101-.506.506-.708.911-.91h-.709c-.202-.406-.303-.81-.607-1.114a.308.308 0 00-.405 0m-2.43.202v.81c.101.101.304.202.405.202.101-.303.405-.405.709-.405.405.71 1.215.608 1.923.608-.303-.304-.607-.506-.91-.81-.102-.101-.203-.405-.406-.405-.405.101-.81.101-1.215.101-.202-.1-.405-.1-.506-.1m-3.847.202c-.101.404-.304.708-.709.91.203 0 .507.102.71.102.202-.304.1-.709.1-1.012h-.1m.708 0l-.304.91c.911.102 1.924.102 2.835 0-.101-.404-.304-.708-.608-1.012-.607.102-1.316.102-1.923.102m7.289.506v.303c.304.102.709.102 1.012.102-.303-.304-.708-.304-1.012-.405m-16.198.405c-.203.303-.304.506-.608.708-.303.203-.202.608-.101.81.506.102 1.012.102 1.519.102-.102-.304-.304-.507-.405-.81 0-.304.405-.405.405-.71-.304-.1-.507-.1-.81-.1m1.012.1c-.101.203-.101.406-.202.608.1.203.202.507.405.709 0 0 .1-.101.202-.101-.304-.405-.101-.81.101-1.215h-.506m.911.202c-.101.102-.101.102-.101.203-.202.202-.202.405-.202.607 0 .102.1.203.1.203.305.202.305-.506 0-.608.203-.1.305-.303.406-.506l-.203.101v-.1.1m4.05 0c.101.203.101.304.101.507h.81c.202.202.405 0 .607 0 .507-.102.912.202 1.317.202h2.632v-.405c-1.215 0-2.329-.202-3.544.203-.303 0-.607-.203-.91-.203-.102-.506-.71-.304-1.013-.304m-3.645.405c.709 0 1.519 0 2.227.102 0-.102.102-.203.102-.304-.304-.304-.81-.203-1.114-.203-.405 0-1.114-.1-1.215.405m10.63 0h1.62c.203 0 .304-.1.304-.303h-1.316c-.304.1-.709 0-.608.303m2.835-.303c0 .1-.101.202-.101.202.405.101.91.101 1.417.101.608.102 1.215.102 1.822-.1-.202-.102-.405-.305-.607-.305-.911 0-1.721.102-2.531.102m3.746-.102c0 .203 0 .405-.101.507-.102 0-.203.1-.304.202v.506c.607 0 1.215-.303 1.822-.405.101-.202 0-.405 0-.607-.405 0-.91-.203-1.417-.203m-17.11.81c0 .102.102.203.102.203.81.101 1.62 0 2.43 0 0 0 0-.101-.102-.101-.81 0-1.62-.203-2.43-.102m4.151.102c.102.1.102.202.203.303h4.758s.101-.101.101-.202c-1.316-.101-2.733-.101-4.05-.101H7.6m6.277-.102v.304c.81 0 1.62 0 2.43-.101.708.202 1.417.101 2.126 0 .405 0 .709.202 1.012.101.101-.506-.607-.304-.91-.405-.71.101-1.52 0-2.228.101a9.757 9.757 0 00-2.43 0m2.43.507c.304.303.506.607.911.81.506.1.911-.203 1.316-.507-.202-.405-.607.203-.81.304-.506-.203-1.012-.405-1.417-.607m-12.149 0c.101.708.203 1.417.405 2.024.506.81.81 1.62 1.417 2.43.608.607 1.215 1.316 2.126 1.417.71 0 1.418.203 2.025-.202a1.808 1.808 0 00.911-2.227c-.303-.709-.405-1.519-1.113-1.924-.911-.506-2.329.405-2.126 1.417 0-1.113 1.62-1.822 2.227-.81.405.81.911 1.823.506 2.734-.708 1.012-2.227 1.114-3.24.405-.303-.304-.81-.607-1.113-1.114-.304-.506-.506-1.012-.81-1.417-.506-.81-.506-1.822-.911-2.632 0 0-.203-.101-.304-.101m4.96 2.834v.506c-.505.304-.91-.202-1.214-.405l.506.507c.405.1.81.1 1.013-.304-.102 0-.203-.203-.304-.304M20.862 5.536c.202 0 .405-.101.506-.101.202.304.202.709.101 1.113-.304.304-.81 0-1.012-.404.1-.304.303-.405.405-.608m-7.087 1.012c-.101-.708.911-.708 1.316-.404.202.506-.101 1.214-.709 1.214-.303-.202-.708-.405-.607-.81zm-9.922 4.05c-.1.607-.303 1.114-.405 1.721v1.215s.102-.101.203-.101c.101-.405.101-.81.202-1.114l.608-1.822c-.203-.304-.405-.101-.608.101zm9.416 4.05c0-.102 0-.102 0 0z" />
    </svg>
  );
});

Notepadplusplus.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Notepadplusplus;
