import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import classes from './Profile.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse1?: ReactNode;
  };
}
/* @figmaId 286:88 */
export const Profile: FC<Props> = memo(function Profile(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.cardiologist}>Cardiologist</div>
      <div className={classes.drJohnSmith}>dr. John Smith</div>
      <div className={classes.ellipse1}>{props.swap?.ellipse1 || <Ellipse1Icon className={classes.icon} />}</div>
    </div>
  );
});
