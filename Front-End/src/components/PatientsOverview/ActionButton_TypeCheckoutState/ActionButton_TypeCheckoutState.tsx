import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ActionButton_TypeCheckoutState.module.css';
import { Rectangle13Icon } from './Rectangle13Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 308:257 */
export const ActionButton_TypeCheckoutState: FC<Props> = memo(function ActionButton_TypeCheckoutState(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle13}>
        <Rectangle13Icon className={classes.icon} />
      </div>
      <div className={classes.discharge}>Discharge</div>
    </div>
  );
});
