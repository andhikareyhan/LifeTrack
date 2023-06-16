import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AlarmBar_LevelNone.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 509:732 */
export const AlarmBar_LevelNone: FC<Props> = memo(function AlarmBar_LevelNone(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.noAlarms}>No alarms</div>
    </div>
  );
});
