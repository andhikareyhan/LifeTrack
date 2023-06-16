import { memo, useState, useEffect } from 'react';
import { format } from "date-fns";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Box_StateActive } from './Box_StateActive/Box_StateActive';
import { Box_StateInactive } from './Box_StateInactive/Box_StateInactive';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Filter } from './Filter/Filter';
import { Logo } from './Logo/Logo';
import { LogOut_StateDefault } from './LogOut_StateDefault/LogOut_StateDefault';
import { MaterialSymbolsSettingsIcon } from './MaterialSymbolsSettingsIcon.js';
import { MdiStarFourPointsOutlineIcon } from './MdiStarFourPointsOutlineIcon.js';
import { Profile } from './Profile/Profile';
import { Set_TypeAboutStateInactive } from './Set_TypeAboutStateInactive/Set_TypeAboutStateInactive';
import { Set_TypeAppearanceStateInactiv } from './Set_TypeAppearanceStateInactiv/Set_TypeAppearanceStateInactiv';
import { Set_TypeNotificationsStateActi } from './Set_TypeNotificationsStateActi/Set_TypeNotificationsStateActi';
import { Set_TypePrivacyStateInactive } from './Set_TypePrivacyStateInactive/Set_TypePrivacyStateInactive';
import { Set_TypeProfileStateInactive } from './Set_TypeProfileStateInactive/Set_TypeProfileStateInactive';
import { Set_TypeSecurityStateInactive } from './Set_TypeSecurityStateInactive/Set_TypeSecurityStateInactive';
import classes from './SettingsNotifications.module.css';
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
/* @figmaId 738:1978 */
export const SettingsNotifications: FC<Props> = memo(function SettingsNotifications(props = {}) {
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
        <div className={classes.notifications}>Notifications</div>
        <div className={classes.manageHowLifeTrackSendsYouNoti}>
          Manage how LifeTrack sends you notifications and alerts.
        </div>
        <div className={classes.line18}></div>
        <div className={classes.enableOrDisableNotifications}>Enable or disable notifications.</div>
        <div className={classes.controlHowOftenYouReceiveNotif}>
          <div className={classes.textBlock}>Control how often you receive</div>
          <div className={classes.textBlock2}>notifications.</div>
        </div>
        <div className={classes.customizeAudioCueForNotificati}>Customize audio cue for notifications.</div>
        <div className={classes.alarms}>Alarms</div>
        <div className={classes.alarms2}>Alarms</div>
        <div className={classes.sound}>Sound</div>
        <div className={classes.email}>Email</div>
        <div className={classes.email2}>Email</div>
        <div className={classes.push}>Push</div>
        <div className={classes.push2}>Push</div>
        <div className={classes.inApp}>In-App</div>
        <div className={classes.inApp2}>In-App</div>
        <div className={classes.notes}>Notes</div>
        <div className={classes.notes2}>Notes</div>
        <div className={classes.preference}>Preference</div>
        <div className={classes.frequency}>Frequency</div>
        <div className={classes.soundAndVisual}>Sound and Visual</div>
        <Toggle_StateOn className={classes.toggle} />
        <Toggle_StateOn className={classes.toggle2} />
        <Box_StateInactive className={classes.box} />
        <Box_StateInactive className={classes.box2} />
        <Box_StateActive className={classes.box3} />
        <Box_StateInactive className={classes.box4} />
        <Box_StateActive className={classes.box5} />
        <Box_StateActive className={classes.box6} />
        <Filter
          className={classes.filter}
          text={{
            label: <div className={classes.label}>Instantly</div>,
          }}
        />
        <Filter
          className={classes.filter2}
          text={{
            label: <div className={classes.label2}>Ding</div>,
          }}
        />
        <Filter
          className={classes.filter3}
          text={{
            label: <div className={classes.label3}>Instantly</div>,
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
      <Set_TypeNotificationsStateActi className={classes.set2} />
      <Set_TypeSecurityStateInactive className={classes.set3} />
      <Set_TypePrivacyStateInactive className={classes.set4} />
      <Set_TypeProfileStateInactive className={classes.set5} />
      <Set_TypeAboutStateInactive className={classes.set6} />
    </div>
  );
});
