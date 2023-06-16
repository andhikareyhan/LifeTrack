import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MdiInformationSlabCircleOutlin } from './MdiInformationSlabCircleOutlin.js';
import classes from './Set_TypeAboutStateInactive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 737:1885 */
export const Set_TypeAboutStateInactive: FC<Props> = memo(function Set_TypeAboutStateInactive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href='/settings-about/'><button type="button" className={classes.about}>
        <MdiInformationSlabCircleOutlin className={classes.icon} />
        About
      </button></a>
    </div>
  );
});
