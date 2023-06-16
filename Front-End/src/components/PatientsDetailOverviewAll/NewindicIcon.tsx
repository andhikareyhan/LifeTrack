import { memo, SVGProps } from 'react';

const NewindicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2} cy={2} r={2} fill='#E84855' />
  </svg>
);
const Memo = memo(NewindicIcon);
export { Memo as NewindicIcon };
