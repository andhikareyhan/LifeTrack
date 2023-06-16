import { memo, SVGProps } from 'react';

const Vector6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 97 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 11.7674H6.19149L9.28723 8.69767H30.4415L33.5372 4.60465L36.117 8.69767H40.2447L42.8245 11.7674L45.4043 0L48.5 22L53 8.69767H58.5L63 7L67.5 8.69767L70.5 14L84 11.7674H97'
      stroke='#718CED'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector6Icon);
export { Memo as Vector6Icon };
