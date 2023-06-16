import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Checkbox_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 349:361 */
export const Checkbox_StateDefault: FC<Props> = memo(function Checkbox_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <input type="checkbox" className={classes.frame5}/>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>label</div>}
    </div>
  );
});
