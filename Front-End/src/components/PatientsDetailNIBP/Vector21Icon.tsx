import { memo, SVGProps } from 'react';

const Vector21Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 65 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 11H15.7767L17.6699 9.70588L20.8252 7.11765L23.9806 3.88235L27.1359 1.29412L30.9223 0H34.7087L39.1262 1.29412L44.1748 2.58824L47.9612 6.47059L53.6408 7.76471L57.4272 9.70588H61.2136L63.7379 11H65'
      stroke='#008000'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector21Icon);
export { Memo as Vector21Icon };
