import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './RegistPages_StateInactive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    a?: ReactNode;
    label?: ReactNode;
  };
}
/* @figmaId 365:552 */
export const RegistPages_StateInactive: FC<Props> = memo(function RegistPages_StateInactive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame9}>{props.text?.a != null ? props.text?.a : <div className={classes.a}>A</div>}</div>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>label</div>}
    </div>
  );
});
