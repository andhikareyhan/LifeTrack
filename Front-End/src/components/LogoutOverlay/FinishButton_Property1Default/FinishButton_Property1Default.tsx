import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './FinishButton_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  onClose: () => void;
}

/* @figmaId 391:1321 */
export const FinishButton_Property1Default: FC<Props> = memo(function FinishButton_Property1Default(props = {
  onClose: function (): void {
    throw new Error('Function not implemented.');
  }
}) {
  const { onClose } = props;
  
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <button type="button" className={classes.finish} onClick={onClose}>Cancel</button>
    </div>
  );
});
