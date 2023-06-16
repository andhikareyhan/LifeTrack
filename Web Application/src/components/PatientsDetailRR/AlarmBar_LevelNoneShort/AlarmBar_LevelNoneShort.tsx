import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AlarmBar_LevelNoneShort.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 560:1706 */
export const AlarmBar_LevelNoneShort: FC<Props> = memo(function AlarmBar_LevelNoneShort(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.noAlarms}>No alarms</div>
    </div>
  );
});
