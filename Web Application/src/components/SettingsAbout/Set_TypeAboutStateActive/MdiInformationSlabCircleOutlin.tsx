import { memo, SVGProps } from 'react';

const MdiInformationSlabCircleOutlin = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11 7V9H13V7H11ZM14 17V15H13V11H10V13H11V15H10V17H14ZM22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z'
      fill='#121212'
    />
  </svg>
);
const Memo = memo(MdiInformationSlabCircleOutlin);
export { Memo as MdiInformationSlabCircleOutlin };
