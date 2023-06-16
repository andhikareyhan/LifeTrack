import { memo, SVGProps } from 'react';

const IcRoundPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.998C11 5.73278 11.1054 5.47843 11.2929 5.29089C11.4804 5.10336 11.7348 4.998 12 4.998C12.2652 4.998 12.5196 5.10336 12.7071 5.29089C12.8946 5.47843 13 5.73278 13 5.998V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z'
      fill='#FFFCF9'
    />
  </svg>
);
const Memo = memo(IcRoundPlusIcon);
export { Memo as IcRoundPlusIcon };
