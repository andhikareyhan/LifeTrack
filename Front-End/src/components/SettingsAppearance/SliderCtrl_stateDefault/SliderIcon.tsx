import { memo, SVGProps } from 'react';

const SliderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={10} cy={10} r={10} fill='#00A792' />
  </svg>
);
const Memo = memo(SliderIcon);
export { Memo as SliderIcon };
