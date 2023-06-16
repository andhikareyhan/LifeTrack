import { memo, SVGProps } from 'react';

const Vector26Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 440 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.5 17L19 11H35L46.5 7.5L56.5 5.5H68.5L77 0.5H91.5L104.5 11H120L147 17L172.5 13.5L198 11H216L235.5 0.5L263.5 7.5L276 11L291 17L306.5 13.5L324 7.5L340 5.5L352.5 7.5L367.5 10.5L390 7.5L415.5 5.5H440'
      stroke='#A755C2'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector26Icon);
export { Memo as Vector26Icon };
