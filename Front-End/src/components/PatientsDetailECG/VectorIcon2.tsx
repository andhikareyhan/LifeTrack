import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4 7L0 3.5L4 0V7Z' fill='#868787' />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
