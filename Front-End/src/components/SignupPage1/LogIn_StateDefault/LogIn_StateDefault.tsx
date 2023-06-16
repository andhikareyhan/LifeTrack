import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './LogIn_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 261:112 */
export const LogIn_StateDefault: FC<Props> = memo(function LogIn_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a className={classes.logIn} href='/main/'>Log in</a>
    </div>
  );
});
