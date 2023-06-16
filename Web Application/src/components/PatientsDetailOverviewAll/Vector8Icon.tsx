import { memo, SVGProps } from 'react';

const Vector8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 99 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 11.7674H6.31915L9.47872 8.69767H20.2739H31.0691L34.2287 4.60465L36.8617 8.69767H41.0745L43.7074 11.7674L46.3404 0L49.5 22L54.0928 8.69767H59.7062L64.299 7L68.8918 8.69767L71.9536 14L85.732 11.7674H99'
      stroke='#718CED'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector8Icon);
export { Memo as Vector8Icon };
