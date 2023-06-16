import { memo, SVGProps } from 'react';

const Vector25Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 439 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.5 22.5H12.5L23 17L36 12L53 8.5L71.5 5.5L91.5 0.5H121.5L137.5 5.5L155 0.5H183.5L197 8.5L209.5 12L219.5 17L230.5 8.5H278L294 0.5H318L329.5 5.5L348.5 8.5L359.5 12L371 22.5L380 12L396.5 5.5L413 0.5H439'
      stroke='#1EBFC4'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector25Icon);
export { Memo as Vector25Icon };
