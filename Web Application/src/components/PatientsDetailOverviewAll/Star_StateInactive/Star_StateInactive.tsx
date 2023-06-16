import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Star_StateInactive.module.css';
import { StarStateInactiveIcon } from './StarStateInactiveIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 475:683 */
export const Star_StateInactive: FC<Props> = memo(function Star_StateInactive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.starStateInactive}>
        <StarStateInactiveIcon className={classes.icon} />
      </div>
    </div>
  );
});
