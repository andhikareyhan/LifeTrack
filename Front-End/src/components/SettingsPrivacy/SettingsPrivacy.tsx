import { memo, useState, useEffect } from 'react';
import { format } from "date-fns";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Filter } from './Filter/Filter';
import { FinishButton_Property1Default } from './FinishButton_Property1Default/FinishButton_Property1Default';
import { Logo } from './Logo/Logo';
import { LogOut_StateDefault } from './LogOut_StateDefault/LogOut_StateDefault';
import { MaterialSymbolsSettingsIcon } from './MaterialSymbolsSettingsIcon.js';
import { MdiStarFourPointsOutlineIcon } from './MdiStarFourPointsOutlineIcon.js';
import { MoreButton_TypeMoreStateDefaul } from './MoreButton_TypeMoreStateDefaul/MoreButton_TypeMoreStateDefaul';
import { Profile } from './Profile/Profile';
import { Set_TypeAboutStateInactive } from './Set_TypeAboutStateInactive/Set_TypeAboutStateInactive';
import { Set_TypeAppearanceStateInactiv } from './Set_TypeAppearanceStateInactiv/Set_TypeAppearanceStateInactiv';
import { Set_TypeNotificationsStateInac } from './Set_TypeNotificationsStateInac/Set_TypeNotificationsStateInac';
import { Set_TypePrivacyStateActive } from './Set_TypePrivacyStateActive/Set_TypePrivacyStateActive';
import { Set_TypeProfileStateInactive } from './Set_TypeProfileStateInactive/Set_TypeProfileStateInactive';
import { Set_TypeSecurityStateInactive } from './Set_TypeSecurityStateInactive/Set_TypeSecurityStateInactive';
import classes from './SettingsPrivacy.module.css';
import { SidebarPages_PagesLogOutStateD } from './SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD';
import { SidebarPages_PagesNotification } from './SidebarPages_PagesNotification/SidebarPages_PagesNotification';
import { SidebarPages_PagesPatientsStat } from './SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat';
import { SidebarPages_PagesSettingsStat } from './SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat';
import { SidebarPages_PagesSupportState } from './SidebarPages_PagesSupportState/SidebarPages_PagesSupportState';
import { Toggle_StateOn } from './Toggle_StateOn/Toggle_StateOn';
import { Overlay } from '../LogoutOverlay/Overlay';

interface Props {
  className?: string;
}
/* @figmaId 738:2124 */
export const SettingsPrivacy: FC<Props> = memo(function SettingsPrivacy(props = {}) {
    // [1] Date Time Functions
    useEffect(() => {
      const updateDateTime = () => {
        const dateTimeElement = document.getElementById("dateTime");
        if (dateTimeElement) {
          const currentDate = new Date();
  
          const formattedDateTime = format(currentDate, "EEE, dd MMM yyyy HH:mm");
          dateTimeElement.textContent = formattedDateTime;
        }
      };
  
      updateDateTime();
  
      // Update the date and time every second
      const interval = setInterval(updateDateTime, 1000);
  
      // Clean up interval
      return () => clearInterval(interval);
    }, []);
  
    // [2] Sign out page overlay
    const [showOverlay, setShowOverlay] = useState(false);
  
    const handleOpenOverlay = () => {
      setShowOverlay(true);
    }
  
    const handleCloseOverlay = () => {
      setShowOverlay(false);
    }
  
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.background}></div>
      <div className={classes.profile2}></div>
      <div className={classes.menu}></div>
      <Profile
        className={classes.profile}
        swap={{
          ellipse1: <Ellipse1Icon className={classes.icon} />,
        }}
      />
      <Logo className={classes.logo} />
      
      <a href="/settings-appearance/" className={classes.settings}>
        <MaterialSymbolsSettingsIcon className={classes.icon3} />
        Settings
      </a>
      
      <div id="dateTime" className={classes.today}></div>
      
      <div className={classes.settings2}>Settings</div>
      
      <SidebarPages_PagesLogOutStateD className={classes.sidebarPages} onOpenOverlay={handleOpenOverlay} />
      {showOverlay && <Overlay onClose={handleCloseOverlay} />}
      <SidebarPages_PagesSupportState className={classes.sidebarPages2} />
      <SidebarPages_PagesSettingsStat className={classes.sidebarPages3} />
      <SidebarPages_PagesNotification className={classes.sidebarPages4} />
      <SidebarPages_PagesPatientsStat className={classes.sidebarPages5} />
      <div className={classes.frame17}>
        <div className={classes.privacy}>Privacy</div>
        <div className={classes.changeHowYouWantDataToBeUsedBy}>Change how you want data to be used by LifeTrack.</div>
        <div className={classes.line18}></div>
        <div className={classes.enableOrDisableDataCollectionT}>
          Enable or disable data collection to share with third parties
        </div>
        <div className={classes.decideWhenToBackUpDeleteOrExpo}>Decide when to back up, delete or export data</div>
        <div className={classes.dataCollectionAndSharing}>Data Collection and Sharing</div>
        <div className={classes.backUpDeletionAndExport}>Back up, deletion and export</div>
        <Toggle_StateOn className={classes.toggle} />
        <div className={classes.backUp}>Back up</div>
        <Filter
          className={classes.filter}
          text={{
            label: <div className={classes.label}>Hourly</div>,
          }}
        />
        <FinishButton_Property1Default
          className={classes.finishButton}
          text={{
            finish: <div className={classes.finish}>Back up</div>,
          }}
        />
        <FinishButton_Property1Default
          className={classes.finishButton2}
          text={{
            finish: <div className={classes.finish2}>Export</div>,
          }}
        />
        <MoreButton_TypeMoreStateDefaul
          className={classes.moreButton}
          text={{
            more: <div className={classes.more}>delete</div>,
          }}
        />
        <LogOut_StateDefault
          className={classes.logOut2}
          text={{
            logOut: <div className={classes.logOut}>Save</div>,
          }}
        />
      </div>
      
      <Set_TypeAppearanceStateInactiv
        className={classes.set}
        swap={{
          mdiStarFourPointsOutline: <MdiStarFourPointsOutlineIcon className={classes.icon2} />,
        }}
        link='/settings-appearance/'
      />
      <Set_TypeNotificationsStateInac className={classes.set2} />
      <Set_TypeSecurityStateInactive className={classes.set3} />
      <Set_TypePrivacyStateActive className={classes.set4} />
      <Set_TypeProfileStateInactive className={classes.set5} />
      <Set_TypeAboutStateInactive className={classes.set6} />
    </div>
  );
});
