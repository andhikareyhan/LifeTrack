import { memo, SVGProps } from 'react';

const SysIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 327 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 9H12.5L14 8L16.5 6L19 3.5L21.5 1.5L24.5 0.5H27.5L31 1.5L33 2.5H38L41.5 6.5L44 8L47.5 9H50.5'
      stroke='#DAA520'
      strokeWidth={2}
    />
    <path
      d='M50 9H62.5L64 8L66.5 6L69 3.5L71.5 1.5L74.5 0.5H77.5L81 1.5L83 2.5H88L91.5 6.5L94 8L97.5 9H100.5'
      stroke='#DAA520'
      strokeWidth={2}
    />
    <path
      d='M100 9H112.5L114 8L116.5 6L119 3.5L121.5 1.5L124.5 0.5H127.5L131 1.5L133 2.5H138L141.5 6.5L144 8L147.5 9H150.5'
      stroke='#DAA520'
      strokeWidth={2}
    />
    <path
      d='M150 9H162.5L164 8L166.5 6L169 3.5L171.5 1.5L174.5 0.5H177.5L181 1.5L183 2.5H188L191.5 6.5L194 8L197.5 9H200.5'
      stroke='#DAA520'
      strokeWidth={2}
    />
    <path
      d='M200 9H212.5L214 8L216.5 6L219 3.5L221.5 1.5L224.5 0.5H227.5L231 1.5L233 2.5H238L241.5 6.5L244 8L247.5 9H250.5'
      stroke='#DAA520'
      strokeWidth={2}
    />
    <path
      d='M250 9H262.5L264 8L266.5 6L269 3.5L271.5 1.5L274.5 0.5H277.5L281 1.5L283 2.5H288L291.5 6.5L294 8L297.5 9H300.5'
      stroke='#DAA520'
      strokeWidth={2}
    />
    <path d='M300 9H312.5L314 8L316.5 6L319 3.5L321.5 1.5L324.5 0.5H327' stroke='#DAA520' strokeWidth={2} />
  </svg>
);
const Memo = memo(SysIcon);
export { Memo as SysIcon };
