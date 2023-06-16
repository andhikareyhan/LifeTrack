import { memo, SVGProps } from 'react';

const Rectangle20Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 511 113' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 5C0 2.23858 2.23858 0 5 0H506C508.761 0 511 2.23858 511 5V108C511 110.761 508.761 113 506 113H5.00001C2.23859 113 0 110.761 0 108V5Z'
      fill='#FFFCF9'
      stroke='#868787'
    />
  </svg>
);
const Memo = memo(Rectangle20Icon);
export { Memo as Rectangle20Icon };
