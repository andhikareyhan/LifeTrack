import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ResendEmail_StateInactive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  enabled: boolean;
  onClick: () => void;
}
/* @figmaId 325:560 */
export const ResendEmail_StateInactive: FC<Props> = memo(function ResendEmail_StateInactive(props = {
  enabled: false,
  onClick: function (): void {
    throw new Error('Function not implemented.');
  }
}) {
  const buttonStyle = props.enabled ? classes.resendEmailDisabled : classes.resendEmailEnabled;

  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${classes.resendEmail} ${buttonStyle}`} onClick={props.enabled ? props.onClick : undefined}>
        Resend Email
      </div>
    </div>
  );
});
