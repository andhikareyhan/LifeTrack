import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './FinishButton_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    finish?: ReactNode;
  };
}
/* @figmaId 391:1321 */
export const FinishButton_Property1Default: FC<Props> = memo(function FinishButton_Property1Default(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.finish != null ? props.text?.finish : <div className={classes.finish}>Finish</div>}
    </button>
  );
});
