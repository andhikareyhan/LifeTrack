import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MaterialSymbolsLockOutlineIcon } from './MaterialSymbolsLockOutlineIcon.js';
import classes from './Set_TypeSecurityStateActive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 737:1890 */
export const Set_TypeSecurityStateActive: FC<Props> = memo(function Set_TypeSecurityStateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href='/settings-security/'><button type="button" className={classes.security}>
        <MaterialSymbolsLockOutlineIcon className={classes.icon} />
        Security
      </button></a>
    </div>
  );
});
