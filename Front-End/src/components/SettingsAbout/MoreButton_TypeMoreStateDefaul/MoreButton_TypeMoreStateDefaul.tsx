import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './MoreButton_TypeMoreStateDefaul.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    more?: ReactNode;
  };
}
/* @figmaId 531:936 */
export const MoreButton_TypeMoreStateDefaul: FC<Props> = memo(function MoreButton_TypeMoreStateDefaul(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.more != null ? props.text?.more : <div className={classes.more}>more</div>}
    </button>
  );
});
