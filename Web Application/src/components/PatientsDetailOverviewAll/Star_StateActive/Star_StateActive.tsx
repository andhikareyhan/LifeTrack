import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Star_StateActive.module.css';
import { StarStateActiveIcon } from './StarStateActiveIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 475:681 */
export const Star_StateActive: FC<Props> = memo(function Star_StateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.starStateActive}>
        <StarStateActiveIcon className={classes.icon} />
      </div>
    </div>
  );
});
