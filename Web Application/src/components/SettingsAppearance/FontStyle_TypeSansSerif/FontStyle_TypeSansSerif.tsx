import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './FontStyle_TypeSansSerif.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 779:1875 */
export const FontStyle_TypeSansSerif: FC<Props> = memo(function FontStyle_TypeSansSerif(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle64}></div>
      <div className={classes.aa}>Aa</div>
      <div className={classes.rectangle63}></div>
      <div className={classes.aa2}>Aa</div>
      <div className={classes.rectangle62}></div>
      <div className={classes.aa3}>Aa</div>
    </div>
  );
});
