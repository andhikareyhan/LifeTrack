import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './MoreButton_TypeHistoryStateDef.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 560:3122 */
export const MoreButton_TypeHistoryStateDef: FC<Props> = memo(function MoreButton_TypeHistoryStateDef(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.history}>history</div>
    </button>
  );
});
