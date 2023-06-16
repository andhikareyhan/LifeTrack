import { memo, SVGProps } from 'react';

const Vector19Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8.5H12.5L14 7.5L16.5 5.5L19 3L21.5 1L24.5 0H27.5L31 1L35 2L38 5L42.5 6L45.5 7.5H48.5L50.5 8.5H51.5'
      stroke='#008000'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector19Icon);
export { Memo as Vector19Icon };
