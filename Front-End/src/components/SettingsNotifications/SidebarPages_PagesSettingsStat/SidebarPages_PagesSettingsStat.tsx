import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MaterialSymbolsSettingsIcon } from './MaterialSymbolsSettingsIcon.js';
import classes from './SidebarPages_PagesSettingsStat.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 280:129 */
export const SidebarPages_PagesSettingsStat: FC<Props> = memo(function SidebarPages_PagesSettingsStat(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href='/settings-appearance/'><button type="button" className={classes.settings}>
        <MaterialSymbolsSettingsIcon className={classes.icon} />
        Settings
      </button></a>
    </div>
  );
});
