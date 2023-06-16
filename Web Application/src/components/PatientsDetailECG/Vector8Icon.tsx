import { memo, SVGProps } from 'react';

const Vector8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 197 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 23.5349H12.5745L18.8617 17.3953H40.3431H61.8245L68.1117 9.2093L73.3511 17.3953H81.734L86.9734 23.5349L92.2128 0L98.5 44L107.639 17.3953H118.809L127.948 14L137.088 17.3953L143.18 28L170.598 23.5349H197'
      stroke='#718CED'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector8Icon);
export { Memo as Vector8Icon };
