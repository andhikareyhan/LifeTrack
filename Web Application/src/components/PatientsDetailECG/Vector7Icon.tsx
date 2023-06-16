import { memo, SVGProps } from 'react';

const Vector7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 194 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 23.5349H12.383L18.5745 17.3953H60.883L67.0745 9.2093L72.234 17.3953H80.4894L85.6489 23.5349L90.8085 0L97 44L106 17.3953H117L126 14L135 17.3953L141 28L168 23.5349H194'
      stroke='#718CED'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector7Icon);
export { Memo as Vector7Icon };
