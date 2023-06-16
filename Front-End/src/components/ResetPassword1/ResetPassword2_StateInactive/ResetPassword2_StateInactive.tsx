import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ResetPassword2_StateInactive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 338:257 */
export const ResetPassword2_StateInactive: FC<Props> = memo(function ResetPassword2_StateInactive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <button type="button" className={classes.resetPassword}>Reset Password</button>
    </div>
  );
});
