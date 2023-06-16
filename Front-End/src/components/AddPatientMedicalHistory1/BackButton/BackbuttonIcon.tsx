import { memo, SVGProps } from 'react';

const BackbuttonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M17.5 22.5L10 15L17.5 7.5L19.25 9.25L13.5 15L19.25 20.75L17.5 22.5Z' fill='#121212' />
  </svg>
);
const Memo = memo(BackbuttonIcon);
export { Memo as BackbuttonIcon };
