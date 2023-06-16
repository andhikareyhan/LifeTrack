import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SignUpGoogle_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    googleLogo?: string;
    root?: string;
  };
}
/* @figmaId 261:130 */
export const SignUpGoogle_StateDefault: FC<Props> = memo(function SignUpGoogle_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <button type="button" className={classes.signUpWithGoogle}><i className={classes.googleLogo}></i>Sign up with Google</button>
    </div>
  );
});
