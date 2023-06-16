import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ForgotPassword_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    forgotPassword?: ReactNode;
  };
  link?: string;
}
/* @figmaId 261:91 */
export const ForgotPassword_StateDefault: FC<Props> = memo(function ForgotPassword_StateDefault(props = {}) {
  const handleClick = () => {
    if (props.link) {
      // redirect to specific link
      window.location.href = props.link;
    }
  };
  
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.forgotPassword != null ? (
        props.text?.forgotPassword
      ) : (
        <div className={classes.forgotPassword}>Forgot password</div>
      )}
    </div>
  );
});
