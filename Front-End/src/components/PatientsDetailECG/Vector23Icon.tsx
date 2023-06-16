import { memo, SVGProps } from 'react';

const Vector23Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 413 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.5 16L26.5 14L36.5 12H50L61.5 10.5L69.5 3.5L72.5 10.5L77 12H90.5L98.5 10.5L107 9.5L114.5 10.5L126 12L133.5 2L136 0L139 2L142.5 7L145.5 10.5L155.5 12L167.5 10.5H182L189.5 12L207.5 10.5L216.5 7L221.5 3.5L227 2H234L240 7L243.5 12H253.5L263.5 10.5L274.5 12H292L311 7L318 14L342 16L361 10.5L373.5 7H388L401.5 10.5L412.5 14'
      stroke='#718CED'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector23Icon);
export { Memo as Vector23Icon };
