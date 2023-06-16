import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 10V0L5 5L0 10Z' fill='#868787' />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
