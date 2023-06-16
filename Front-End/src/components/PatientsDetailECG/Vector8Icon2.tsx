import { memo, SVGProps } from 'react';

const Vector8Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 162 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 19.2558H10.3404L15.5106 14.2326H33.1755H50.8404L56.0106 7.53488L60.3191 14.2326H67.2128L71.5213 19.2558L75.8298 0L81 36L88.5155 14.2326H97.701L105.216 11.4545L112.732 14.2326L117.742 22.9091L140.289 19.2558H162'
      stroke='#718CED'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Vector8Icon2);
export { Memo as Vector8Icon2 };
