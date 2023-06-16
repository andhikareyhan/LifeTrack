import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Checkbox_StateActive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 349:363 */
export const Checkbox_StateActive: FC<Props> = memo(function Checkbox_StateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame7}>
        <div className={classes.rectangle29}></div>
      </div>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>label</div>}
    </div>
  );
});
