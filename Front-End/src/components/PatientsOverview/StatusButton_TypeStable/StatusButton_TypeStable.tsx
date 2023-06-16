import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Rectangle13Icon } from './Rectangle13Icon.js';
import classes from './StatusButton_TypeStable.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 308:196 */
export const StatusButton_TypeStable: FC<Props> = memo(function StatusButton_TypeStable(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle13}>
        <Rectangle13Icon className={classes.icon} />
      </div>
      <div className={classes.stable}>Stable</div>
    </div>
  );
});
