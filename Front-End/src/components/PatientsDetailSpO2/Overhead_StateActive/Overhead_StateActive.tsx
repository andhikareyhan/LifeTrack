import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Overhead_StateActive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    enterTextHere?: ReactNode;
  };
}
/* @figmaId 312:483 */
export const Overhead_StateActive: FC<Props> = memo(function Overhead_StateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle15}></div>
      {props.text?.enterTextHere != null ? (
        props.text?.enterTextHere
      ) : (
        <div className={classes.enterTextHere}>Enter Text Here</div>
      )}
    </div>
  );
});
