import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MaterialSymbolsPatientListIcon } from './MaterialSymbolsPatientListIcon.js';
import classes from './SidebarPages_PagesPatientsStat.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 280:120 */
export const SidebarPages_PagesPatientsStat: FC<Props> = memo(function SidebarPages_PagesPatientsStat(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
    <a href='/patients/'><button type="button" className={classes.patients}>
      <MaterialSymbolsPatientListIcon className={classes.icon} />
      Patients
    </button></a>
  </div>
  );
});
