import { memo, SVGProps } from 'react';

const MdiStarFourPointsOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17 5.58325L18.2084 8.79159L21.4167 9.99992L18.2084 11.2083L17 14.4166L15.7917 11.2083L12.5834 9.99992L15.7917 8.79159L17 5.58325ZM17 0.833252L14.5 7.49992L7.83337 9.99992L14.5 12.4999L17 19.1666L19.5 12.4999L26.1667 9.99992L19.5 7.49992L17 0.833252Z'
      fill='#121212'
    />
    <g clipPath='url(#clip0_901_3114)'>
      <path
        d='M7.5 16.1875L8.40625 18.5938L10.8125 19.5L8.40625 20.4062L7.5 22.8125L6.59375 20.4062L4.1875 19.5L6.59375 18.5938L7.5 16.1875ZM7.5 12.625L5.625 17.625L0.625 19.5L5.625 21.375L7.5 26.375L9.375 21.375L14.375 19.5L9.375 17.625L7.5 12.625Z'
        fill='#121212'
      />
    </g>
    <defs>
      <clipPath id='clip0_901_3114'>
        <rect width={15} height={15} fill='white' transform='translate(0 12)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(MdiStarFourPointsOutlineIcon);
export { Memo as MdiStarFourPointsOutlineIcon };
