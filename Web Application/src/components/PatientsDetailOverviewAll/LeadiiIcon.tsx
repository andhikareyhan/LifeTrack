import { memo, SVGProps } from 'react';

const LeadiiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 388 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 14H5.5L8 12H19L23 8.5H28L30.5 12H39L42 14L45 0L48 16.5L53 14H57.5L64 12L70 8.5L73.5 14L80 12H89.5L97 14'
      stroke='#718CED'
      strokeWidth={2}
    />
    <path
      d='M194 14H199.5L202 12H213L217 8.5H222L224.5 12H233L236 14L239 0L242 16.5L247 14H251.5L258 12L264 8.5L267.5 14L274 12H283.5L291 14'
      stroke='#718CED'
      strokeWidth={2}
    />
    <path
      d='M97 14H102.5L105 12H116L120 8.5H125L127.5 12H136L139 14L142 0L145 16.5L150 14H154.5L161 12L167 8.5L170.5 14L177 12H186.5L194 14'
      stroke='#718CED'
      strokeWidth={2}
    />
    <path
      d='M291 14H296.5L299 12H310L314 8.5H319L321.5 12H330L333 14L336 0L339 16.5L344 14H348.5L355 12L361 8.5L364.5 14L371 12H380.5L388 14'
      stroke='#718CED'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(LeadiiIcon);
export { Memo as LeadiiIcon };
