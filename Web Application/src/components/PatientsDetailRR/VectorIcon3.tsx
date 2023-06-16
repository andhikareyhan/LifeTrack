import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 7V0L4 3.5L0 7Z' fill='#868787' />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
