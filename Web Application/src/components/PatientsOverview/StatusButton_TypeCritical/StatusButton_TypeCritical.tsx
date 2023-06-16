import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Rectangle13Icon } from './Rectangle13Icon.js';
import classes from './StatusButton_TypeCritical.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 308:198 */
export const StatusButton_TypeCritical: FC<Props> = memo(function StatusButton_TypeCritical(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle13}>
        <Rectangle13Icon className={classes.icon} />
      </div>
      <div className={classes.critical}>Critical</div>
    </div>
  );
});
