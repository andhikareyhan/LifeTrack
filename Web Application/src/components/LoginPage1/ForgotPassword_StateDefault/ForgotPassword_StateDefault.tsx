import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ForgotPassword_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 261:91 */
export const ForgotPassword_StateDefault: FC<Props> = memo(function ForgotPassword_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a className={classes.forgotPassword} href="/forgot-password/">Forgot password</a>
    </div>
  );
});
