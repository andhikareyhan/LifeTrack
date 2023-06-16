import { memo, SVGProps } from 'react';

const CarbonSkillLevelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.75 1.25V6.25L2.5 6.25L2.5 1.25L18.75 1.25ZM17.5 5V2.5L3.75 2.5L3.75 5L17.5 5ZM18.75 7.5L18.75 12.5L7.5 12.5L7.5 7.5L18.75 7.5ZM17.5 11.25V8.75L8.75 8.75L8.75 11.25L17.5 11.25ZM18.75 13.75V18.75H11.25L11.25 13.75L18.75 13.75ZM17.5 17.5V15H12.5L12.5 17.5H17.5Z'
      fill='#121212'
    />
  </svg>
);
const Memo = memo(CarbonSkillLevelIcon);
export { Memo as CarbonSkillLevelIcon };
