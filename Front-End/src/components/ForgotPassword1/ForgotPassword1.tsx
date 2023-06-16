import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackButton } from './BackButton/BackButton';
import classes from './ForgotPassword1.module.css';
import { Logo } from './Logo/Logo';
import { ResetPassword1_StateDefault } from './ResetPassword1_StateDefault/ResetPassword1_StateDefault';

interface Props {
  className?: string;
}
/* @figmaId 326:131 */
export const ForgotPassword1: FC<Props> = memo(function ForgotPassword1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <input type="email" className={classes.line5} placeholder="Enter your email" />
      <div className={classes.frame4}>
        <div className={classes.hospitalAdmin1}></div>
      </div>
      <Logo className={classes.logo} />
      <div className={classes.noWorriesWeLlSendYouResetInstr}>No worries, we’ll send you reset instructions.</div>
      <div className={classes.forgotPassword}>Forgot Password?</div>
      <ResetPassword1_StateDefault className={classes.resetPassword1} />
      <BackButton className={classes.backButton} />
    </div>
  );
});
