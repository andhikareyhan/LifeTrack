import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackButton } from './BackButton/BackButton';
import { Logo } from './Logo/Logo';
import classes from './ResetPassword1.module.css';
import { ResetPassword2_StateInactive } from './ResetPassword2_StateInactive/ResetPassword2_StateInactive';

interface Props {
  className?: string;
}
/* @figmaId 331:223 */
export const ResetPassword1: FC<Props> = memo(function ResetPassword1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes._211109Younghospitaladministrat}></div>
      <div className={classes.frame3}>
        <ResetPassword2_StateInactive className={classes.resetPassword2} />
        <div className={classes.yourNewPasswordMustBeDifferent}>
          Your new password must be different from your previous password.
        </div>
        <div className={classes.returnToLogin}>Return to login</div>
        <input type="password" className={classes.line5} placeholder="Enter new password" />
        <input type="password" className={classes.line52} placeholder="Confirm new password" />
        <div className={classes.passwordReset}>Password Reset</div>
        <Logo className={classes.logo} />
        <BackButton className={classes.backButton} />
      </div>
    </div>
  );
});
