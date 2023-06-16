import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './LogOut_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    logOut?: ReactNode;
  };
}
/* @figmaId 458:740 */
export const LogOut_StateDefault: FC<Props> = memo(function LogOut_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.logOut != null ? props.text?.logOut : <div className={classes.logOut}>Log out</div>}
    </div>
  );
});
