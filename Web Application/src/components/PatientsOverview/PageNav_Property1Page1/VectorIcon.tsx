import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5 10L0 5L5 0V10Z' fill='#868787' />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
