import { memo, SVGProps } from 'react';

const IconParkOutlineCautionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M24 5L2 43H46L24 5Z' stroke='#00A792' strokeWidth={4} strokeLinejoin='round' />
    <path d='M24 35V36M24 19L24.008 29' stroke='#00A792' strokeWidth={4} strokeLinecap='round' />
  </svg>
);
const Memo = memo(IconParkOutlineCautionIcon);
export { Memo as IconParkOutlineCautionIcon };
