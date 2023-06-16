import { memo, SVGProps } from 'react';

const Vector22Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 10H15.6977L17.5814 8.66667L20.7209 6L23.8605 2.66667L27 0' stroke='#008000' strokeWidth={2} />
  </svg>
);
const Memo = memo(Vector22Icon);
export { Memo as Vector22Icon };
