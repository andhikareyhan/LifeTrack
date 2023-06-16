import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Overhead_StateInactive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    enterTextHere?: ReactNode;
  };
  link?: string;
}
/* @figmaId 312:481 */
export const Overhead_StateInactive: FC<Props> = memo(function Overhead_StateInactive(props = {}) {
  const handleClick = () => {
    if (props.link) {
      // redirect to specific link
      window.location.href = props.link;
    }
  };
  
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
        <div className={classes.rectangle16} onClick={handleClick}>
          {props.text?.enterTextHere != null ? (
            props.text?.enterTextHere
          ) : (
            <div className={classes.enterTextHere}>Enter Text Here</div>
          )}
        </div>
    </div>
  );
});
