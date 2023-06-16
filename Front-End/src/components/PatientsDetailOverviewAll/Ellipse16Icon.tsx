import { memo, SVGProps } from 'react';

const Ellipse16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={4} cy={4} r={4} fill='#FFFCF9' />
  </svg>
);
const Memo = memo(Ellipse16Icon);
export { Memo as Ellipse16Icon };
