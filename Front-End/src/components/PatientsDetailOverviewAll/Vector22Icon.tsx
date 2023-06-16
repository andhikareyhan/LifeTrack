import { memo, SVGProps } from 'react';

const Vector22Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 7.5H12.5L14 6.5L16.5 4.5L19 2L21.5 0' stroke='#008000' strokeWidth={2} />
  </svg>
);
const Memo = memo(Vector22Icon);
export { Memo as Vector22Icon };
