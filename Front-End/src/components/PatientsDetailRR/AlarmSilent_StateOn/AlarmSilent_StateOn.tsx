import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AlarmSilent_StateOn.module.css';
import { MdiBellOutlineIcon } from './MdiBellOutlineIcon.js';

interface Props {
  className?: string;
  classes?: {
    ellipse4?: string;
    root?: string;
  };
}
/* @figmaId 509:705 */
export const AlarmSilent_StateOn: FC<Props> = memo(function AlarmSilent_StateOn(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.mdiBellOutline}>
        <MdiBellOutlineIcon className={classes.icon} />
      </div>
    </div>
  );
});
