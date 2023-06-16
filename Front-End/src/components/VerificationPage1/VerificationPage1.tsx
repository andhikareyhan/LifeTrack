import { memo, useState, useEffect } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackButton } from './BackButton/BackButton';
import { Logo } from './Logo/Logo';
import { ResendEmail_StateInactive } from './ResendEmail_StateInactive/ResendEmail_StateInactive';
import classes from './VerificationPage1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 323:524 */
export const VerificationPage1: FC<Props> = memo(function VerificationPage1(props = {}) {
  const [timer, setTimer] = useState(60); // timer for 3 minutes
  const [resendEnabled, setResendEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          setResendEnabled(true);
          return prevTimer;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleResendEmail = () => {
    setTimer(60); // Reset timer    
    setResendEnabled(false); // Disable the resend button
  };

  useEffect(() => {
    if (timer === 0) {
      setResendEnabled(true);
    }
  }, [timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes._800DoctorsTalkingGettyImages14}></div>
      <div className={classes.frame3}>
      <ResendEmail_StateInactive className={classes.resendEmail} enabled={resendEnabled} onClick={handleResendEmail} />
        <div className={classes.didnTReceiveTheEmailPleaseChec}>
          Didn’t receive the email? Please check your spam folder or try to resend the email.
        </div>
        <input type="email" className={classes.line5} placeholder="Email" />
        <div className={classes._30}>{formattedTime}</div>
        <div className={classes.checkYourEmailForAVerification}>
          <div className={classes.textBlock}>Check your email</div>
          <div className={classes.textBlock2}>for a verification link</div>
        </div>
        <Logo className={classes.logo} />
        <BackButton className={classes.backButton} />
      </div>
    </div>
  );
});
