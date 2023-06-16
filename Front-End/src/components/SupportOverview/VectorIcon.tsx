import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M25 2.75C25 1.2375 23.875 0 22.5 0H2.5C1.125 0 0 1.2375 0 2.75V19.25C0 20.7625 1.125 22 2.5 22H22.5C23.875 22 25 20.7625 25 19.25V2.75ZM22.5 2.75L12.5 9.625L2.5 2.75H22.5ZM22.5 19.25H2.5V5.5L12.5 12.375L22.5 5.5V19.25Z'
      fill='#121212'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
