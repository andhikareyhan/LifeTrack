import { memo, useState, useEffect } from 'react';
import { format } from "date-fns";
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Logo } from './Logo/Logo';
import { MaterialSymbolsSettingsIcon } from './MaterialSymbolsSettingsIcon.js';
import { MdiStarFourPointsOutlineIcon } from './MdiStarFourPointsOutlineIcon.js';
import { MoreButton_TypeMoreStateDefaul } from './MoreButton_TypeMoreStateDefaul/MoreButton_TypeMoreStateDefaul';
import { Profile } from './Profile/Profile';
import { Set_TypeAboutStateActive } from './Set_TypeAboutStateActive/Set_TypeAboutStateActive';
import { Set_TypeAppearanceStateInactiv } from './Set_TypeAppearanceStateInactiv/Set_TypeAppearanceStateInactiv';
import { Set_TypeNotificationsStateInac } from './Set_TypeNotificationsStateInac/Set_TypeNotificationsStateInac';
import { Set_TypePrivacyStateInactive } from './Set_TypePrivacyStateInactive/Set_TypePrivacyStateInactive';
import { Set_TypeProfileStateInactive } from './Set_TypeProfileStateInactive/Set_TypeProfileStateInactive';
import { Set_TypeSecurityStateInactive } from './Set_TypeSecurityStateInactive/Set_TypeSecurityStateInactive';
import classes from './SettingsAbout.module.css';
import { SidebarPages_PagesLogOutStateD } from './SidebarPages_PagesLogOutStateD/SidebarPages_PagesLogOutStateD';
import { SidebarPages_PagesNotification } from './SidebarPages_PagesNotification/SidebarPages_PagesNotification';
import { SidebarPages_PagesPatientsStat } from './SidebarPages_PagesPatientsStat/SidebarPages_PagesPatientsStat';
import { SidebarPages_PagesSettingsStat } from './SidebarPages_PagesSettingsStat/SidebarPages_PagesSettingsStat';
import { SidebarPages_PagesSupportState } from './SidebarPages_PagesSupportState/SidebarPages_PagesSupportState';
import { Overlay } from '../LogoutOverlay/Overlay';

interface Props {
  className?: string;
}
/* @figmaId 743:2394 */
export const SettingsAbout: FC<Props> = memo(function SettingsAbout(props = {}) {
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
        <div className={classes.about}>About</div>
        <div className={classes.learnMoreAboutLifeTrack}>Learn more about LifeTrack.</div>
        <div className={classes.line18}></div>
        <div className={classes.currentVersionOfTheApp}>Current version of the app</div>
        <div className={classes.v19Apr2023}>v1.0.0 (9 Apr 2023)</div>
        <div className={classes.andhikaReyhanSoebroto}>Andhika Reyhan Soebroto</div>
        <div className={classes.nikolas}>Nikolas</div>
        <div className={classes.davidAzariaRauf}>David Azaria Rauf</div>
        <div className={classes.hereAreThePeopleBehindLifeTrac}>Here are the people behind LifeTrack</div>
        <div className={classes.cloudEngineerAndWebApplication}>Cloud Engineer and Web Application Developer</div>
        <div className={classes.hardwareEngineerAndAlgorithmDe}>
          <div className={classes.textBlock}>Hardware Engineer</div>
          <div className={classes.textBlock2}>and Algorithm Developer</div>
        </div>
        <div className={classes.hardwareEngineerAndAlgorithmDe2}>
          <div className={classes.textBlock3}>Hardware Engineer</div>
          <div className={classes.textBlock4}>and Algorithm Developer</div>
        </div>
        <div className={classes.appVersion}>App Version</div>
        <div className={classes.developmentTeam}>Development Team</div>
        <MoreButton_TypeMoreStateDefaul
          className={classes.moreButton}
          text={{
            more: <div className={classes.more}>Release Notes</div>,
          }}
        />
        <div className={classes.rectangle80}></div>
        <div className={classes.rectangle81}></div>
        <div className={classes.rectangle82}></div>
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
      <Set_TypePrivacyStateInactive className={classes.set4} />
      <Set_TypeProfileStateInactive className={classes.set5} />
      <Set_TypeAboutStateActive className={classes.set6} />
    </div>
  );
});
