import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './TimeScale_HighlightedToday.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 847:2952 */
export const TimeScale_HighlightedToday: FC<Props> = memo(function TimeScale_HighlightedToday(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes._30Days}>30 days</div>
      <div className={classes.unnamed}>|</div>
      <div className={classes._14Days}>14 days</div>
      <div className={classes.unnamed2}>|</div>
      <div className={classes._7Days}>7 days</div>
      <div className={classes.unnamed3}>|</div>
      <div className={classes.today}>Today</div>
    </div>
  );
});
