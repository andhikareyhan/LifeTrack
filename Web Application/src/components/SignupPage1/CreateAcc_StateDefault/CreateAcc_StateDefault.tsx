import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CreateAcc_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 261:79 */
export const CreateAcc_StateDefault: FC<Props> = memo(function CreateAcc_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href="/verification/"><button type="button" className={classes.createAccount}>Create account</button></a>
    </div>
  );
});