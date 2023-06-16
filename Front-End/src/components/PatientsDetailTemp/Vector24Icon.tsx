import { memo, SVGProps } from 'react';

const Vector24Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 439 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8.5L13.5 5H32.5L51 2.5L64.5 6L83 5L90.5 3.5L107 6H116L136 3.5H157.5L168.5 5L186.5 0.5L204.5 3.5L219.5 5L235.5 2.5H253L263 3.5L278.5 0.5H293.5L306.5 3.5L318 5H334L350 0.5L370.5 3.5L385 5L404 0.5H418L424 3.5H439'
      stroke='#ED686C'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector24Icon);
export { Memo as Vector24Icon };
