import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './RegistPages_StateActive.module.css';

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
/* @figmaId 365:554 */
export const RegistPages_StateActive: FC<Props> = memo(function RegistPages_StateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame11}>
        {props.text?.a != null ? props.text?.a : <div className={classes.a}>A</div>}
      </div>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>label</div>}
    </div>
  );
});
