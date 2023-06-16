import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './LogInGoogle_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    googleLogo?: string;
    root?: string;
  };
}
/* @figmaId 256:276 */
export const LogInGoogle_StateDefault: FC<Props> = memo(function LogInGoogle_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <button type="button" className={classes.logInWithGoogle}><i className={classes.googleLogo}></i>Log in with Google</button>
    </div>
  );
});
