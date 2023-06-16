import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AlarmOff_StateDefault.module.css';
import { MdiBellRemoveOutlineIcon } from './MdiBellRemoveOutlineIcon.js';

interface Props {
  className?: string;
  classes?: {
    ellipse9?: string;
    root?: string;
  };
}
/* @figmaId 529:845 */
export const AlarmOff_StateDefault: FC<Props> = memo(function AlarmOff_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.mdiBellRemoveOutline}>
        <MdiBellRemoveOutlineIcon className={classes.icon} />
      </div>
    </div>
  );
});
