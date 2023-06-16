import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Rectangle13Icon } from './Rectangle13Icon.js';
import classes from './StatusButton_TypeUnstable.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 308:197 */
export const StatusButton_TypeUnstable: FC<Props> = memo(function StatusButton_TypeUnstable(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle13}>
        <Rectangle13Icon className={classes.icon} />
      </div>
      <div className={classes.unstable}>Unstable</div>
    </div>
  );
});
