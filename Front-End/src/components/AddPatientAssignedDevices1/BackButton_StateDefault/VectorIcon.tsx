import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5.9999 12L7.3999 10.6L2.7999 6L7.3999 1.4L5.9999 0L-9.72748e-05 6L5.9999 12Z' fill='#FFFCF9' />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
