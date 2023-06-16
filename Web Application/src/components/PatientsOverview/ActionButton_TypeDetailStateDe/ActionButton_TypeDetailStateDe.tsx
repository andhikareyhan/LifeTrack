import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ActionButton_TypeDetailStateDe.module.css';
import { Rectangle13Icon } from './Rectangle13Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 308:254 */
export const ActionButton_TypeDetailStateDe: FC<Props> = memo(function ActionButton_TypeDetailStateDe(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle13}>
        <Rectangle13Icon className={classes.icon} />
      </div>
      <div className={classes.detail}>Detail</div>
    </div>
  );
});
