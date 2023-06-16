import { memo, SVGProps } from 'react';

const Vector6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 192 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 23.5349H12.2553L18.383 17.3953H60.2553L66.383 9.2093L71.4894 17.3953H79.6596L84.766 23.5349L89.8723 0L96 44L104.907 17.3953H115.794L124.701 14L133.608 17.3953L139.546 28L166.268 23.5349H192'
      stroke='#718CED'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector6Icon);
export { Memo as Vector6Icon };
