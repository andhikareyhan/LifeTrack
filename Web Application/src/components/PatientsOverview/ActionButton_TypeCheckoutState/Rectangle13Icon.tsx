import { memo, SVGProps } from 'react';

const Rectangle13Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 85 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 5C0 2.23858 2.23858 0 5 0H80C82.7614 0 85 2.23858 85 5V19C85 21.7614 82.7614 24 80 24H5C2.23858 24 0 21.7614 0 19V5Z'
      fill='#FFFCF9'
      stroke='#E84855'
    />
  </svg>
);
const Memo = memo(Rectangle13Icon);
export { Memo as Rectangle13Icon };
